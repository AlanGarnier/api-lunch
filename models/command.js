/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('command', {
    command_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      primaryKey: true
    },
    command_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    command_is_canceled: {
      type: DataTypes.BOOL,
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
    tableName: 'command'
  });
};
