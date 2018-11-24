// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return  console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
  // db.collection('Users').deleteMany({name: 'Jake'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').deleteOne({ 
    _id: new ObjectID('5bf5e1c174845fad600ff0de')
   }).then((result) => {
    console.log(result);
  });
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });
  // client.close();
});

