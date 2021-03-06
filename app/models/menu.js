/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    menu_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    menu_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    menu_is_available: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'menu'
  });
};
