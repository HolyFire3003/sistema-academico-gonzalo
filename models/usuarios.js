"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      apellido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      correo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_estudiante: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "estudiantes",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "usuarios",
    }
  );

  usuario.getUsuarios = async (params) => {
    const query = ``; // Agrega aquí tu consulta SQL para obtener los usuarios
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  usuario.associate = function (models) {
    // usuario.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return usuario;
};

