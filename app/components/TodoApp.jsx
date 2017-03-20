var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');


var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Play with kitty'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Shop for food'
        }, {
          id: 4,
          text: 'Study React'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;
