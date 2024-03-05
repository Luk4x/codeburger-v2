import express from 'express';
import { resolve } from 'path';
import cors from 'cors';

import routes from './routes';

import './database';

const corsOptions = {
  origin: 'https://luk4x-codeburgerv2.netlify.app' || 'http://localhost:5173',
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
