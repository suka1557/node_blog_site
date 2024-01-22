const { MongoClient } = require('mongodb');
const fs = require('fs');
const yaml = require('js-yaml');


// Read the YAML file
const yamlConfig = fs.readFileSync('./configs/database.yml', 'utf8');

// Parse YAML into a JavaScript object
const config = yaml.load(yamlConfig);


// Create a new MongoClient
const mongo_client = new MongoClient(config.MONGO_URI_LOCAL);

// Connect to the MongoDB server
mongo_client.connect((err) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  });

const mongo_db = mongo_client.db(config.MONGO_DATABASE);
const mongo_collection = mongo_db.collection(config.MONGO_COLLECTION);


module.exports = mongo_collection;