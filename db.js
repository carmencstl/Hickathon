const Pool = require('pg').Pool;

const pool = new Pool({
    user: "cacastil",
    host: "localhost",
    database: "app",
    password: "app",
    port: 5432,
});

module.exports = pool;