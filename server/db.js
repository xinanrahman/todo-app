require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  host: "localhost",
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
});

module.exports = pool;
