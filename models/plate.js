/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plate', {
    plate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    plate_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    plate_description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type_plate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'type_plate',
        key: 'type_plate_id'
      }
    }
  }, {
    tableName: 'plate'
  });
};
