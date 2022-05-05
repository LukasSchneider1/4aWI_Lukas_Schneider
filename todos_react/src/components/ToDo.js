import React, { Component } from 'react';
import styles from './ToDo.module.css'
import { AiOutlineClose } from "react-icons/ai"

class ToDo extends Component {
    constructor(props) {
        super(props);
    }

    getButtonID = (element) => {    
        let id = element.currentTarget.id         
        if(id == this.props.buttonID){
            this.props.rmTask(id)                        
        }    
    }
   
    render() { 
        return ( 
            <div className={styles.container}>
                <div>{this.props.title}</div>
                <div>{this.props.Done}</div>                
                <div>
                    <button className={styles.icon} id={this.props.buttonID} onClick={this.getButtonID}><AiOutlineClose/></button> 
                </div>            
            </div>            
         );
    }
}
 
export default ToDo;