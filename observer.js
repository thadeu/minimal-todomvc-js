function Observable() {
  this.observers = [];
}

Observable.prototype = {
  subscribe: function(callback) {
    this.observers.push(callback);
  },

  notify: function(context) {
    for (let observer in this.observers) {
      let current = this.observers[observer];
      current(context);
    }
  }
};
