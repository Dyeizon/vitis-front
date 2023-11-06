const express = require("express")
const mysql = require('mysql2');
const app = express()

app.set("view engine", "ejs")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vitis12345',
    database: 'vitis'
});

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados MySQL');
    }
});

app.get("/", (req, res) => {
    console.log("Here")
    res.download("server.js")
    res.render("index", { text: "World" })
})

connection.query('SELECT * FROM ciclos', (error, results, fields) => {
    if (error) {
      console.error('Erro na consulta:', error);
    } else {
      console.log('Resultados da consulta:', results);
    }
});

const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)
