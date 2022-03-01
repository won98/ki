const express = require("express");
const app = express();
const port = 8080;
const db = require("./db/db");
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { idx, text } = req.body;
    console.log(idx, text);
    const conn = await db.getConnection();
    const sql = "update todolist set text=? where idx=?";
    const data = [idx, text];
    const [rows] = await db.query(sql, data);
    res.status(200).json({ result: rows });
    conn.release();
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
