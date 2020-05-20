import React, {Component} from 'react';
import Todos from './Todos'

class App extends Component{
  state = {
    todos:[
      {id: 1, content: 'Start FYP'},
      {id: 2, content: 'Start Assignments'},
      {id: 3, content: 'Start WIE project work'},

    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
    

  }
  render(){
  return (
    <div className="todo-app container">
     <h1 className="center blue-text">Todo's</h1>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
}

export default App;
