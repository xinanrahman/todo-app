const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
});

module.exports = pool;
