import React, { Component } from 'react';
import ToDo from './ToDo';
import styles from './ToDoList.module.css'

class ToDoList extends Component {

    getAllToDos = () =>{
        let widgets = [];
        this.props.todos.forEach(todo => {
            widgets.push(<ToDo title={todo.name} isDone={todo.done}></ToDo>)
        });
        return widgets;
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