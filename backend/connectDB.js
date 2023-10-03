const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "technologystore",
// });
// module.exports = connection;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test_hack_2", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

const connectionDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection database successfully");
    } catch (error) {
        console.error("Không thể kết nối đến cơ sở dữ liệu:", error);
    }
};

connectionDatabase();
