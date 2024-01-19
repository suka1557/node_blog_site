const express = require('express');
const article_route = express.Router();

article_route.get('/new',(req, res)=>{
    res.render('new_article_form');
});

module.exports = article_route;