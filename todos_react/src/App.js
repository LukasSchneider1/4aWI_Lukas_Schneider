import logo from './logo.svg';
import './App.css';
import Head from './components/Header';
import TaskAdder from './components/TaskAdder';
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      todos:[]
    }

  }

addTask = (value) => {
  let todo = {
    id: 1,
    name: value,
    done: false
  }

  let todos = this.state.todos;
  todos.push(todo)

  this.setState({
    todos: todos
  })  
}

removeTask = (element) =>{
  let todos = this.state.todos;
  todos.splice(element-1,1)

  this.setState({
    todos: todos
  })  
  
}

  render(){
    return (
      <div className="App">
      <Head></Head>
      <TaskAdder onTaskAdded={this.addTask}></TaskAdder>
      <ToDoList todos={this.state.todos} rmTask={this.removeTask}></ToDoList>      
      </div>
    );
  }
}

export default App;
