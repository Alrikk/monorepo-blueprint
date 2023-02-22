import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config();

export function getApp() {
  const app = express();
  app.use(cors());
  app.use(express.static('public'));
  app.use(express.json({ limit: '50mb' }));

  app.get('/', (req, res) => {
    res.send('Hello!');
  });

  return app;
}
