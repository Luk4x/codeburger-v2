import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';

import { User } from '../app/models/User';
import { Product } from '../app/models/Product';
import { Category } from '../app/models/Category';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }
  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL);
    models
      .map(model => model.init(this.connection))
      .filter(model => model.associate)
      .map(model => model.associate(this.connection.models));
  }
  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL);
  }
}

export default new Database();
