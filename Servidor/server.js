const express = require("express")
const mysql = require('mysql2');
const cors = require('cors');
const app = express()

app.set("view engine", "ejs")
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Batman',
    database: 'vitis'
});

app.get("/api/ciclos", (req, res) => {
  connection.query('SELECT * FROM ciclos', (error, results, fields) => {
    if (error) {
      console.error('Erro na consulta:', error);
    } else {
      console.log('Resultados da consulta:', results);
      res.json(results)
    }
});
})

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados MySQL');
    }
});

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(5000)
