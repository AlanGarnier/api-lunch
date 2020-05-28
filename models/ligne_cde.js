/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ligne_cde', {
    menu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'menu',
        key: 'menu_id'
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
    ligne_cde_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ligne_cde_quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ligne_cde_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'ligne_cde'
  });
};
