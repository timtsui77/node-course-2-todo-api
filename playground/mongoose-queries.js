const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b91e8aa50c6384e98e7ff9c';

// if(!ObjectID.isValid(id)){
//     console.log('ID no valid');
// }

Todo.findById(id).then((todo) =>{
   console.log('Todo by ID', todo);
}).catch((e) => console.log(e));