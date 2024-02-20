import { Sequelize } from "sequelize-typescript";

// create an instance of Sequelize that can be used to interact with the database
const sequelize = new Sequelize({
    database: "postgres",
    dialect: "postgres",
    username: "postgres",
    password: "root",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    models: [__dirname + '../model']


});

export default sequelize;



