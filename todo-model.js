function TodoModel() {
  this.todos = []
  this.context = new Observable(this)
}

TodoModel.prototype = {
  addTodo: function(todo) {
    this.todos.push({
      name: todo
    })

    this.context.notify()
  },

  getTodos: function() {
    return this.todos
  }
}