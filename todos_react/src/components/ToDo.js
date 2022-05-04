import React, { Component } from 'react';
import styles from './ToDo.module.css'
import { AiOutlineClose } from "react-icons/ai"

class ToDo extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className={styles.container}>
                <div>{this.props.title}</div>
                <div>{this.props.Done}</div>
                <div className={styles.icon}><AiOutlineClose/></div>                       
            </div>            
         );
    }
}
 
export default ToDo;