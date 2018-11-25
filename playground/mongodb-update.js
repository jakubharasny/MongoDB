// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return  console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bf896956f70dfc1c7c552a3')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bf7387eacf573f413f10c53')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Jacopo'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // client.close();
});

