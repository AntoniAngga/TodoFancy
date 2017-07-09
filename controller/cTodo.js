const Todo = require('../model/Todo');

let addTodo = function(req,res) {
  let data = req.body;
  let newTodo = Todo({
    description : data.description,
    completed : data.completed,
    userId : data.userId
  });
  
  newTodo.save(function(err){
    if(err){
      res.status(501).send(`something wrong with your connection`);
    } else {
      res.send(`1 Document Added`);
    }
  })
  
}

let findbyIdTodo = function(req,res) {
  Todo.find({})
  .where('userId').equals(req.params.id) 
  .exec(function(err,todo){
    if (err) {
      res.status(501).send(`something wrong with your find by id ${err}`);
    } else {
      res.send(todo);
    }
  })
}

let updatebyidTodo = function(req,res) {
  Todo.findById(req.params.id, function(err,todo) {
    if(err) {
      res.status(501).send(`something wrong with your find by id`);
    } else {
      let data = req.body;
      todo.description = data.description;
      todo.completed = data.completed;
      todo.userId = data.userId;
      
      todo.save(function (err){
        if (err) {
          res.status(501).send(`Something wrong with your connection update`);
        } else {
          res.send(`Update 1 Document`);
        }
      })
    }
  })
}

let deletebyidTodo = function(req,res){
  Todo.findById(req.params.id, function(err,todo) {
    if (err) {
      res.status(501).send('Something wrong with your connection Delete',err);
    } else {
      res.send('Deleted 1 Document');
    }
  })
}

module.exports = {
  addTodo,
  findbyIdTodo,
  updatebyidTodo,
  deletebyidTodo
}
