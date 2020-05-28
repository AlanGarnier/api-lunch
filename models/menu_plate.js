/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu_plate', {
    plate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'plate',
        key: 'plate_id'
      }
    },
    menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'menu',
        key: 'menu_id'
      }
    }
  }, {
    tableName: 'menu_plate'
  });
};
