import Sequelize, { Model } from 'sequelize';

export class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.path
              ? `http://localhost:3000/category-file/${this.path}`
              : null;
          }
        }
      },
      { sequelize }
    );

    return this;
  }
}
