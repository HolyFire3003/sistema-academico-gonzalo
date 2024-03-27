"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define(
    "carrera",
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
      
    },
    {
      timestamps: false,
      tableName: "carreras",
    }
  );

  carrera.getCarreras = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  carrera.associate = function (models) {
    // carrera.hasMany(models.materias, {
    //   foreignKey: "fk_carrera",
    //   as: "materias",
    // });
  };

  return carrera;
};

