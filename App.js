const express = require('express');
const app = express();
const PORT = 5024;

app.get('/', (req, res) => {
    res.send('Hello from Node and Express !!');
});

app.listen(PORT, ()=>{console.log(`listening on port: ${PORT}`);});