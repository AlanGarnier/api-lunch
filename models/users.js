/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    users_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    users_lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    users_firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    users_mail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    users_phone: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    users_login: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    users_password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    users_is_admin: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
