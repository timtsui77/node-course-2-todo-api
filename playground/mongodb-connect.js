//const MonogoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MonogoDB server');
    }
    console.log('Connected to MonogoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //    if (err) {
    //        return console.log('Unable to insert todo', err);
    //    }
    //    console.log(JSON.stringify(result));
    //    console.log('-------');
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: 'Tim',
    //     age: 41,
    //     location: 'Hong Kong'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result));
    //     console.log('-------');
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();

});