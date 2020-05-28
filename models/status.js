/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    status_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      primaryKey: true
    },
    status_libelle: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'status'
  });
};
