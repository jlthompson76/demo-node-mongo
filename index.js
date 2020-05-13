// you still need these commands in the terminal first, while in your project folder:
// npm init -y
// npm install mongodb
// when you're done, to run this file, type: node index.js

const mongodb = require('mongodb');

// Get mongoClient to act as a bridge between node and mongo
const mongoClient = mongodb.MongoClient;
const DB_URL = 'mongodb://localhost:27017';

mongoClient.connect(DB_URL, (err, db) => {
    if (err) {
        // In case there was an error
        console.log(err);
    }
    else {
        // Here, we know there was no error. Now we have a db connection
        console.log("Connected to DB");
        // Equivalent of saying 'use moviecharacters' 
        const db_handler = db.db('moviecharacters');

        // Equivalent of saying 'db.createCollection('marvel')'
        db_handler.createCollection('marvel', (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Your collection was created!");
            }
        });

        // Create a single Element
        let my_obj = {
            name: "Spider Man",
            hobby: "Web Designer",
            rank: 21,
            has_movie: true
        }
        // In mongo shell, this is equivalent to "db.marvel.insert(my_obj)"
        db_handler.collection('marvel').insertOne(my_obj, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("1 document was inserted");
            }
        });


        // To add multiple objects in a single go
        let my_objects = [
            {
                name: "Thor",
                hobby: "Finding hammer",
                rank: 32,
                has_movie: true
            },
            {
                name: "Captain Marvel",
                hobby: "Flying jets",
                rank: 35,
                has_movie: true
            },
            {
                name: "Black Widow",
                hobby: "Hacking",
                rank: 29,
                has_movie: false
            },
            {
                name: "Thanos",
                hobby: "Snapping fingers",
                rank: 40,
                has_movie: false
            }
        ];
        db_handler.collection('marvel').insertMany(my_objects, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                // console.log(res);
                console.log("Inserted Multiple Entries");
            }
        });


    }
})