/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guest', {
    users_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'users_id'
      }
    }
  }, {
    tableName: 'guest'
  });
};
