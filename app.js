const log = (text) => console.log(text)

$(function(){
  var model = new TodoModel()
  var view = new TodoView(model)
  var controller = new TodoController(model, view)
})