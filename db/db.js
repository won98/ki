const mysql = require("mysql2/promise");
const deconfig = require("./dbconfig.json");

const db = mysql.createPool(deconfig);

module.exports = db;
