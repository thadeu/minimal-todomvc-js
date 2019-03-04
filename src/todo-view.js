function TodoView(model) {
  this.model = model;
  this.component = new Observable(this);

  this.init();
  this.preventSubmitForm();
}

TodoView.prototype = {
  init: function() {
    log("TodoView initialized");

    this.$container = $(".main-container");
    this.$addTodoButton = this.$container.find(".add-todo-button");
    this.$todoTextBox = this.$container.find(".todo-text-box");
    this.$todoContainer = this.$container.find(".todo-container");
    this.$formContainer = this.$container.find("form");

    this.$addTodoButton.click(() => this.addTodoButtonClicked());
    this.refreshTodoList();
  },

  preventSubmitForm: function() {
    this.$formContainer.submit(function(e) {
      e.preventDefault();
    });
  },

  addTodoButtonClicked: function() {
    this.component.notify({
      todo: this.$todoTextBox.val()
    });

    this.$todoTextBox.val("");
    this.refreshTodoList();
  },

  refreshTodoList: function() {
    let todos = this.model.getTodos();
    let $todoContainer = this.$todoContainer;

    $todoContainer.html("");

    let todoCard = todo => `<div class="flex justify-center mb-4 w-full">
      <div class="max-w-md w-full lg:flex">
        <div class="border border-grey-light bg-white p-2 flex flex-col justify-between leading-normal w-full">
          <div class="text-black font-bold">${todo.name}</div>
        </div>
      </div>
    </div>`;

    for (let todo in todos) {
      $todoContainer.append(todoCard(todos[todo]));
    }
  }
};
