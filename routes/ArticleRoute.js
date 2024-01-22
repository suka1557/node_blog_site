const express = require('express');
const article_route = express.Router();
const mongo_collection = require('../connections/MongoConnect');

// Middleware to parse form data
article_route.use(express.urlencoded({ extended: true }));

article_route.get('/new',(req, res)=>{
    res.render('new_article_form');
});

article_route.post('/create_new_article', async (req, res)=>{
    const {article_title, author_name, article_description, article_content} = req.body;
    
    // Get the current date and time
    const currentDate = new Date();

    // Get the Unix time (milliseconds since the Unix epoch)
    const unixTimeMilliseconds = currentDate.getTime();

    // Convert milliseconds to seconds (Unix time format)
    const unixTimeSeconds = Math.floor(unixTimeMilliseconds / 1000);
    const created_at_unix_timestamp = unixTimeSeconds;
    const updated_at_unix_timestamp = unixTimeSeconds;

    const newRecord = {
        'article_title': article_title,
        'author_name': author_name,
        'article_description':article_description,
        'article_content':article_content,
        'created_at_unix_timestamp':created_at_unix_timestamp,
        'updated_at_unix_timestamp':updated_at_unix_timestamp,
    };

    await mongo_collection.insertOne(newRecord);

    // Use client-side script to display a popup message
    const popupScript = `
      <script>
        alert('Article Submitted Successfully');
        window.location.href = '/';
      </script>
    `;


    res.send(popupScript);

});

module.exports = article_route;