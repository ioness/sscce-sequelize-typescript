'use strict'

import { Sequelize } from 'sequelize-typescript'

const sequelize: any = new Sequelize({
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
})

export default sequelize
