/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    users_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'users_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'department',
        key: 'department_id'
      }
    }
  }, {
    tableName: 'employee'
  });
};
