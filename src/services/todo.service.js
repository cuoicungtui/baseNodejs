var Todo = require('../models/todo.model')

exports.FindTodo = async function (query, page, limit) {

  try {
      var todos = await Todo.find(query)
      return todos;
  } catch (e) {
      return 0;
  }
}

exports.addTodos = async function (data) {

      var new_todos = new Todo(data);
      
      await new_todos.save()
    .then(data=>{
      return data;
    })
    .catch(err=>{
      return 0;
    })
      
}

exports.deleteMany = async (conditions)=>{
    await Todo.deleteMany(conditions)
    .then(data=>{
      return data;
    })
    .catch(err=>{
      return 0;
    })
}

exports.deleteOne = async (conditions)=>{
  await Todo.deleteOne(conditions)
  .then(data=>{
    return data;
  })
  .catch(err=>{
    return 0;
  })
}

