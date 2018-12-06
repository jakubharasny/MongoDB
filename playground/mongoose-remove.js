const {ObjectID} = require('mongodb')

const {mongoose} = require ('./../server/db/mongoose');
const { Todo } = require ('./../server/models/todo');
const { Users } = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'5c08642e7dd374652de742b4'}).then((todo) => {
  console.log(todo);
});


Todo.findByIdAndRemove('5c08642e7dd374652de742b4').then((todo) => {
  console.log(todo);
});