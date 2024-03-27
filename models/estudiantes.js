"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define(
    "estudiante",
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
      ci: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carreras",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "estudiantes",
    }
  );

  estudiante.getEstudiantes = async (params) => {
    
    const query = ``; // Agrega aquí tu consulta SQL para obtener los estudiantes
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  estudiante.associate = function (models) {
    // estudiante.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return estudiante;
};

