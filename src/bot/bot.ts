import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const { BOT_TOKEN, DEPLOY_URL } = process.env;

let bot: TelegramBot;

if (DEPLOY_URL) {
  bot = new TelegramBot(BOT_TOKEN as string);
  bot.setWebHook(`${DEPLOY_URL}/${BOT_TOKEN}`);
} else {
  bot = new TelegramBot(BOT_TOKEN as string, {
    polling: true,
  });
}

bot.onText(/\/start/, async (msg: TelegramBot.Message) => {
  return bot.sendMessage(msg.chat.id, `Welcome to your new bot!`);
});

bot.on('message', async (msg: TelegramBot.Message) => {
  try {
    const sentMessage = await bot.sendMessage(msg.chat.id, 'Hello World!');
    console.log(sentMessage);
  } catch (error) {
    console.log(error);
  }
});

export default bot;
