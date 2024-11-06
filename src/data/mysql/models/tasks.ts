import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connect";

class Tasks extends Model {}

Tasks.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER().UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    },
    {
        sequelize, 
        tableName: 'tasks', 
        timestamps: false,
    },
);

export default Tasks;

