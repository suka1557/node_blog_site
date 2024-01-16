const express = require('express');
const app = express();
const PORT = 5024;

//set up ejs as engine for rendering html
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`);});