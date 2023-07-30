# Telegram Express Template

This is a simple boilerplate to create an Typescript Express application that uses the [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) package to create a Telegram bot.

## Instalation

To use this template, you can use the CLI to create a new project.

```bash
npx tg-express-template-cli <project-name>
```

## Set up

To use this package, it is important to configure the appropriate environment variables. You can check out the `.env.sample` file to see the required variables.

The `DEPLOY_URL` variable should be the URL of your deployed application. Depending on where you deploy it, you might have this variable available by default or with another name. If you do not have this variable available by default with your deployer, you can add it manually once you have the URL of your application.

For example, when deploying on Render.com, this variable is automatically available for your deployed app.

The `BOT_TOKEN` variable is the token of your Telegram bot. You can get it by talking to the [BotFather](https://t.me/botfather).

The template comes with a code block logger that allows you to test the bot is working as expected. You can comment it out or delete it if it is not needed. It will respond with the message `Hello World` when you send a message to the bot.

```javascript
bot.on('message', async (msg: TelegramBot.Message) => {
  try {
    const sentMessage = await bot.sendMessage(msg.chat.id, 'Hello World!');
    console.log(sentMessage);
  } catch (error) {
    console.log(error);
  }
});
```

## Development

To run the application locally, you can use the `npm run dev` command.

## Deployment

To start the application in production mode, you can use the `npm run start` command.

## Dependencies

This template uses the following dependencies:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [typescript](https://www.npmjs.com/package/typescript)
- [helmet](https://www.npmjs.com/package/helmet)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)
