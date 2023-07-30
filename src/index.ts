import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

import bot from './bot/bot';

dotenv.config();

const { BOT_TOKEN, PORT } = process.env;

const APP_PORT = PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get(`/`, async (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.post(`/${BOT_TOKEN}`, async (req: Request, res: Response) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(APP_PORT, () => {
  console.log(`Server listening on port ${APP_PORT}`);
});
