const {ObjectID} = require('mongodb')

const {mongoose} = require ('./../server/db/mongoose');
const { Todo } = require ('./../server/models/todo');
const { Users } = require('./../server/models/users');

// var id = '5c0076350d4fd91fa9aa36a11'; // These find have error handling
var id2 = '5bfc789212ab12af106d4c86'
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid')
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('id not found')
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e))

Users.findById(id2).then((user) => {
  if(!user) {
    return console.log('id not found')
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e))
