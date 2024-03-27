"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const leccion = sequelize.define(
    "leccion",
    {
      fk_seccion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "secciones",
          key: "id",
        },
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      
    },
    {
      timestamps: false,
      tableName: "lecciones",
    }
  );

  leccion.getLecciones = async (params) => {
    
    const query = ``; // Agrega aquí tu consulta SQL para obtener las lecciones
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  leccion.associate = function (models) {
    // leccion.hasMany(models.materias, {
    //   foreignKey: "fk_leccion",
    //   as: "materias",
    // });
  };

  return leccion;
};

