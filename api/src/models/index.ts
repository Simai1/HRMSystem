import {Sequelize} from "sequelize";
import dotenv from 'dotenv'; // eslint-disable-line
import User from "./user";

const {DB_USER, DB_PWD, DB_HOST, DB_PORT, DB_NAME} = process.env;
export const models = {User};

export const sequelize = new Sequelize(DB_NAME as string, DB_USER as string, DB_PWD as string, {
    host: DB_HOST as string,
    port: parseInt(DB_PORT as string),
    dialect: 'postgres',
    dialectOptions: {
        // multipleStatements: true,
        typeCast: true,
    },
    define: {
        // charset: 'utf8mb4',
        // collate: 'utf8mb4_unicode_ci',
        timestamps: true,
        underscored: true,
    },
    logging: false,
})
