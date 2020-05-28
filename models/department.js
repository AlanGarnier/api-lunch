/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    department_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'department'
  });
};
