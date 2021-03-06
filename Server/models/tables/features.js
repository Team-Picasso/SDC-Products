const Sequelize = require('sequelize');

class features extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'product',
          key: 'product_id',
        },
      },
      feature: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: 'features',
      timestamps: false,
      indexes: [
        {
          name: 'features_pkey',
          unique: true,
          fields: [
            { name: 'id' },
          ],
        },
        {
          name: 'productId_pkey2',
          unique: false,
          fields: [
            { name: 'product_id' },
          ],
        },
      ],
    });
    return features;
  }
}

module.exports = (sequelize, DataTypes) => features.init(sequelize, DataTypes);
