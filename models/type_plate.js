/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_plate', {
    type_plate_id: {
      type: DataTypes.INT(11),
      allowNull: false,
      primaryKey: true
    },
    type_plate_libelle: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'type_plate'
  });
};
