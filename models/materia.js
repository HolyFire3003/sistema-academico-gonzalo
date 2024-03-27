"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define(
    "profesor",
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
      semestre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_profesor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carreras",
          key: "id",
        },
      }, // Corregido: se movió la llave de cierre antes de fk_carrera

      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carreras",
          key: "id",
        },
      }, // Se corrigió la posición de la llave de cierre

    },
    {
      timestamps: false,
      tableName: "materias",
    }
  );

  profesor.getProfesores = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  profesor.associate = function (models) {
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return profesor;
};

