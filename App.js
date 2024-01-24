const express = require('express');
const app = express();
const PORT = 5024;
const ArticleRoute = require('./routes/ArticleRoute');
const mongo_collection = require('./connections/MongoConnect');


//set up ejs as engine for rendering html
app.set('view engine', 'ejs');

// Use article route inside app
app.use('/articles', ArticleRoute);

//Checking passing of variables from JS file to EJS template to be render
const developer_name = "Sukant Kumar";

app.get('/', async (req, res) => {

    // Assuming you want to find all documents in the collection
    const documents = await mongo_collection.find({}).toArray();
    // Sort the array in descending order based on updated_at
    documents.sort((a, b) => b.updated_at_unix_timestamp - a.updated_at_unix_timestamp);

    // Now, `documents` is an array containing the retrieved data
    const article_list = documents.map((record) => {
            // Process each document if needed
            const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate = new Date(record.updated_at_unix_timestamp * 1000).toLocaleDateString('en-US', dateOptions);
            
                return {
                    record_id: record._id.toHexString(),
                    title : record.article_title,
                    author: record.author_name,
                    description : record.article_description,
                    formatted_date: formattedDate,
                };

        });

    res.render('index', {articles: article_list, developer_name});
});

app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`);});