const express = require('express');
const article_route = express.Router();

// Middleware to parse form data
article_route.use(express.urlencoded({ extended: true }));

article_route.get('/new',(req, res)=>{
    res.render('new_article_form');
});

article_route.post('/create_new_article',(req, res)=>{
    const {ArticleTitle, ArticleDescription, ArticleContent} = req.body;


    res.send(`Form submitted successfully! - ${ArticleTitle} - ${ArticleDescription} - ${ArticleContent}`);
});

module.exports = article_route;