/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procurement', {
    procurement_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      primaryKey: true
    },
    procurement_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    procurement_date: {
      type: DataTypes.DATETIME,
      allowNull: false
    },
    users_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'users_id'
      }
    }
  }, {
    tableName: 'procurement'
  });
};
