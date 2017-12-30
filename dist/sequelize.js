'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    storage: ':memory:',
    // host: process.env.DB_HOST
    define: {
        freezeTableName: process.env.DB_DEFINE_freezeTableName === 'true'
    }
});
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map