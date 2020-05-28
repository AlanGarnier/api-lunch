/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('canteen', {
    users_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'users_id'
      }
    }
  }, {
    tableName: 'canteen'
  });
};
