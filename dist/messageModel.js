'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
// console.log(Sequelize.DataTypes)
const Message = sequelize_1.default.define('message', {
    id: { type: sequelize_typescript_1.Sequelize.DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    name: { type: sequelize_typescript_1.Sequelize.DataTypes.STRING(255), allowNull: false },
    message: { type: sequelize_typescript_1.Sequelize.DataTypes.TEXT, allowNull: false }
});
exports.default = Message;
//# sourceMappingURL=messageModel.js.map