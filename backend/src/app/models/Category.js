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
              ? `https://codeburger-v2-production.up.railway.app/category-file/${this.path}`
              : null;
          }
        }
      },
      { sequelize }
    );

    return this;
  }
}
