const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  database: "userapi",
  port: 5432,
});

module.exports = pool;
