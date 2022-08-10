const express = require("express"); //importando módulo express
const app = express(); //instanciando express na variavel app

app.set('view engine', 'ejs'); //starta o ejs como view engine

app.get('/', (req, res) => { //rota padrão
    res.render('index');
});

app.listen(8080, () => { //executa o express na seguinte porta
    console.log("App rodando!");
});