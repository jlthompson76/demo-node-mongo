### Connecting MongoDB with Node.js

#### Programmatic Way of Interacting with Database
* For large applications, we cannot write queries and submit them through Mongo shell.
* We need a programmatic way of interacting with our database.
* We will use Node.js to execute our queries in MongoDB.

#### Connecting Node.js with MongoDB
* You can use the *monogdb* package to get started.
    * Since this is an external package, we will have to do *npm install mongodb*  
    `const mongodb = require (‘mongodb’)`
* `mongodb.MongoClient` acts as a bridge between Node and MongoDB.

#### Syntax for Creating a Connection
```
1. const mongodb = require (‘mongodb’);
2. const mongoClient = mongodb.MongoClient;
3. const URL = ‘mongodb://localhost:27017’
    // 27017 is the PORT MongoDB database is running

// Now, we can open a connection

4. mongoClient.connect(URL, (err, db) => {
    // do something with err or db
});
```

#### Working with a Specific Database Name
```
mongoClient.connect(URL, (err, db) => {
    if (err) { console.log(err); }
    else {
        // Here, there is no error and we have our database instance
        console.log(‘Connected to the database’);
        // Open our desired database
        const db_handler = db.db(DB_NAME) // e.g. DB_NAME = ‘bookstore’
    }
});
```

#### Create A Collection
```
db_handler.createCollection(collection_name, callback);

createCollection: Method used to create a new collection

collection_name: Name of the collection we want to add the document to

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
```

### CRUD Operations with Node/Mongo

#### Create New Documents (Single Item)
```
db_handler.collection(collection_name).insertOne(my_obj, callback);

collection_name: Name of the collection we want to add the document to

insertOne: Method used to insert a single document
my_obj : A Single document to be added. It is a JSON object

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
```

#### Create New Documents (Multiple Items)
```
db_handler.collection(collection_name).insertMany(my_obj, callback);

collection_name: Name of the collection we want to add the document to

insertMany: Method used to insert multiple documents at a time

my_obj: Array of documents to be added. Each document is a JSON object

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
```

#### Read Documents (Finding Documents)
```
db_handler.collection(collection_name).find(query).toArray(callback);

collection_name: Name of the collection we want to add the document to

find: Method used to find documents

query: Key: Value pairs to filter documents. e.g. To find all documents query = {}
To find all documents where name is ‘Thor’ query = {name: ‘Thor’}

toArray: We want to convert the returned documents into an Array

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a result (res)
}
```

#### Update Documents (Single Document)
```
db_handler.collection(collection_name).updateOne(query, new_values, callback);

collection_name: Name of the collection we want to add the document to

updateOne: Method used to update a single document

query: Key: Value pairs to filter document which needs to be updated

new_values: New values which are needed to be set // e.g. { $set: {name : “Loki”} }

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
```

#### Update Documents (Multiple Documents)
```
db_handler.collection(collection_name).updateMany(query, new_values, callback);

collection_name: Name of the collection we want to add the document to

updateMany: Method used to update multiple documents

query: Key: Value pairs to filter all documents which needs to be updated

new_values: New values which are needed to be set // e.g. { $set: {name : “Loki”} }

callback : (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
```

#### Delete Document (Single Document)
```
db_handler.collection(collection_name).deleteOne(query, callback);

collection_name: Name of the collection we want to add the document to

deleteOne: Method used to update a single document

query: Key: Value pairs to filter document which needs to be deleted

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
```

#### Delete Document (Multiple Documents)
```
db_handler.collection(collection_name).deleteMany(query, callback);

collection_name: Name of the collection we want to add the document to

deleteMany: Method used to update multiple documents

query: Key: Value pairs to filter all document which needs to be deleted

callback: (err, res ) => {
    // If some error occured, you have err. Otherwise mongoDB sends a response (res)
}
