import 'dotenv/config';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';

import routes from './routes';

import './database';

const corsOptions = {
  origin: process.env.FRONT_END_URL,
  credentials: true
};

class App {
  constructor() {
    this.app = express();
    this.app.use(cors(corsOptions));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads'))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

const { app } = new App();

export default app;
