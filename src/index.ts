import * as config from "config";
import { schedule, validate } from "node-cron";
import * as TelegramBot from "node-telegram-bot-api";
import { sports } from "./sport";
import { getCongratsSmile, sleep } from "./utils";

const token = config.get("token");
const chatId = config.get("chatId");
process.env["NTBA_FIX_350"] = "1";
const bot = new TelegramBot(token, { polling: true });

// Matches "/sport"
bot.onText(/\/sport(.*)/, async (msg, match) => {
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
});
