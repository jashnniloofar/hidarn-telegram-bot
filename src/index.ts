import * as config from "config";
import { schedule } from "node-cron";
import * as TelegramBot from "node-telegram-bot-api";
import { programs } from "./program";
import { sports } from "./sport";
import { getCongratsSmile, isTodayEven, sleep, toFarsiNumber } from "./utils";

const token = config.get("token");
process.env["NTBA_FIX_350"] = "1";
const bot = new TelegramBot(token, { polling: true });
console.log("Bot started");

// Matches "/sport"
bot.onText(/\/sport(.*)/, async (msg, match) => {
  const chatId = msg.chat.id;
  console.log(`${chatId}: Sport program started at ${new Date()}`);
  bot.sendMessage(chatId, "شروع برنامه ورزشی");
  for (const sport of sports) {
    bot.sendMessage(chatId, toFarsiNumber(`${sport.time} دقیقه ${sport.title}`));
    await sleep(sport.time * 1000 * 60);
    if (sport.rest > 0) {
      bot.sendMessage(chatId, toFarsiNumber(`${sport.rest} دقیقه استراحت`));
      await sleep(sport.rest * 1000 * 60);
    }
  }
  bot.sendMessage(chatId, "پایان برنامه ورزشی");
  bot.sendMessage(chatId, getCongratsSmile());
  console.log(`${chatId}: Sport program ended at ${new Date()}`);
});

for (const program of programs) {
  schedule(program.schedule, () => {
    if (program.even === undefined || (program.even === true && isTodayEven()) || (program.even === false && !isTodayEven())) {
      const chatId = config.get("chatId");
      bot.sendMessage(chatId, toFarsiNumber(`${program.title}: ${program.text}`));
      console.log(`${chatId}: Food reminder sent at ${new Date()}`);
    }
  });
}
