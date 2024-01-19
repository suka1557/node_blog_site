const express = require('express');
const app = express();
const PORT = 5024;
const ArticleRoute = require('./routes/ArticleRoute');

const article_list = require('./data/ArticleList');

//set up ejs as engine for rendering html
app.set('view engine', 'ejs');

// Use article route inside app
app.use('/articles', ArticleRoute);

//Checking passing of variables from JS file to EJS template to be render
const developer_name = "Sukant Kumar";

app.get('/', (req, res) => {
    res.render('index', {articles: article_list, developer_name});
});

app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`);});