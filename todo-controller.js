function TodoController(model, view){
  this.model = model
  this.view = view
  this.init()
}

TodoController.prototype = {
  init: function() {
    log('TodoController initialized')
    this.view.component.subscribe(x => this.addTodo(x))
  },

  addTodo: function(args) {
    this.model.addTodo(args.todo)
  }
}