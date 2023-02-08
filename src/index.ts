import * as config from "config";
import { schedule } from "node-cron";
import * as TelegramBot from "node-telegram-bot-api";
import { programs } from "./program";
import { sports } from "./sport";
import { getCongratsSmile, isTodayEven, sleep } from "./utils";

const token = config.get("token");
process.env["NTBA_FIX_350"] = "1";
const bot = new TelegramBot(token, { polling: true });

// Matches "/sport"
bot.onText(/\/sport(.*)/, async (msg, match) => {
  console.log(`Sport program started at ${new Date()}`);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "شروع برنامه ورزشی");
  for (const sport of sports) {
    bot.sendMessage(chatId, `${sport.time} دقیقه ${sport.title}`);
    await sleep(sport.time * 1000 * 60);
    if (sport.rest > 0) {
      bot.sendMessage(chatId, `${sport.rest} دقیقه استراحت`);
      await sleep(sport.rest * 1000 * 60);
    }
  }
  bot.sendMessage(chatId, "پایان برنامه ورزشی");
  bot.sendMessage(chatId, getCongratsSmile());
  console.log(`Sport program ended at ${new Date()}`);
});

for (const program of programs) {
  schedule(program.schedule, () => {
    if (program.even === undefined || (program.even === true && isTodayEven()) || (program.even === false && !isTodayEven())) {
      const chatId = config.get("chatId");
      bot.sendMessage(chatId, `${program.title}: ${program.text}`);
      console.log(`Food reminder sent at ${new Date()}`);
    }
  });
}
