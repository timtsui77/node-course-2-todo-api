const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MonogoDB server');
    }
    console.log('Connected to MonogoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').deleteOne({text:'Each lunch'}).then((result) => {
        
    })

    client.close();

});