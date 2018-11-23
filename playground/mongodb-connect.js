// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var user = {name: 'andrew', age: 25};
// var {name} = user; // distructuring example 
// console.log(name);

/* 
DeprecationWarning: current URL string parser is deprecated, 
and will be removed in a future version. To use the new parser, 
pass option { useNewUrlParser: true } to MongoClient.connect.
*/


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });
  // db.collection('Users').insertOne({
  //   name: 'Jake',
  //   age: 33,
  //   location: 'London'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Users', err)
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});