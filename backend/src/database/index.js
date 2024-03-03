import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
import databaseConfig from '../config/database';

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
    this.connection = new Sequelize(
      'postgresql://postgres:1C4ga3deBFbFD6feAbGeEGCdEe5gea61@viaduct.proxy.rlwy.net:27081/railway'
    );
    models
      .map(model => model.init(this.connection))
      .filter(model => model.associate)
      .map(model => model.associate(this.connection.models));
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:1-6gCcEH5aAf5E52d2HHbcEcFEc65-1B@roundhouse.proxy.rlwy.net:18533'
    );
  }
}

export default new Database();
