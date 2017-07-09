const mongoose = require('mongoose');
const Schema = mongoose.schema;


const todoSchema = new Schema({
  userId : [{
    "type" : Schema.Types.ObjectId,
    "ref"  : "users"
  }],
  description : {type : String},
  completed : {type : Number}
  }, {
      timestamps : true
})

let todo = mongoose.model('todo',todoSchema);

module.exports = todo;