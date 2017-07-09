const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
  userId : {type : Schema.Types.ObjectId , ref : "users"},
  description : {type : String},
  completed : {type : Number}
  }, {
      timestamps : true
})

let Todo = mongoose.model('todo',todoSchema);

module.exports = Todo;