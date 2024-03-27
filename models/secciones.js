"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const seccion = sequelize.define(
    "seccion",
    {
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
      fk_materia: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "materias",
          key: "id",
        },
      },
      
    },
    {
      timestamps: false,
      tableName: "secciones",
    }
  );

  seccion.getSecciones = async (params) => {
    
    const query = ``; // Agrega aquí tu consulta SQL para obtener las secciones
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  seccion.associate = function (models) {
    // seccion.hasMany(models.materias, {
    //   foreignKey: "fk_seccion",
    //   as: "materias",
    // });
  };

  return seccion;
};

