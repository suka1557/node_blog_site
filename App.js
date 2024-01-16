const express = require('express');
const app = express();
const PORT = 5024;

//set up ejs as engine for rendering html
app.set('view engine', 'ejs');

//Checking passing of variables from JS file to EJS template to be render
const developer_name = "Sukant Kumar";

app.get('/', (req, res) => {
    res.render('index', {developer_name});
});

app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`);});