import React, { Component } from 'react';
import ToDo from './ToDo';
import styles from './ToDoList.module.css'

class ToDoList extends Component {

    getAllToDos = () =>{
        let widgets = [];
        let buttonId = 0;
        this.props.todos.forEach(todo => {
            buttonId ++
            widgets.push(<ToDo title={todo.name} isDone={todo.done} buttonID={buttonId} rmTask={this.rmTask}></ToDo>)
        });        
        return widgets;
    }

    rmTask = (id) =>{
        this.props.rmTask(id);
    }
    
    render() { 
        return ( 
            <div className={styles.centerContainer}>
            <div className={styles.container}>
                {this.getAllToDos()}
            </div>
            </div>
         );
    }
}
 
export default ToDoList;