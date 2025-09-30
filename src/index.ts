import dotenv from "dotenv";
dotenv.config();
import TelegramBot from "node-telegram-bot-api";
const token = process.env.TELEGRAM_TOKEN as string;
const bot = new TelegramBot(token, {polling: true});  // a bot that uses "long polling"

console.log("bot started");
// Matches "/start" with optional text
bot.onText(/\/start/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId,"Welcome to the suryadev78_bot, it's a bot built as a personal project that lets you trade SOL");
  console.log("sent welcome message");
});


