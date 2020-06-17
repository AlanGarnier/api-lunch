/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status_command', {
    status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    command_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'command',
        key: 'command_id'
      }
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'status_command'
  });
};
