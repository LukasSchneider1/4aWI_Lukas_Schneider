import React, { Component } from 'react';
import styles from './Vote.module.css'

class Vote extends Component {

    constructor(props){
        super(props)
        this.counter = 0;
        this.state={
            counter: 0,
            hover: 0
        }
    }

    voted = () =>{
        this.setState({
            counter: this.state.counter + 1   
        })      
    }
    
    hovered = () =>{
        this.setState({
            hover: this.state.hover + 1   
        })      
    }

    render() { 
        return (
            <div className={styles.container}>
                <div className={styles.card} onClick={this.voted} onMouseOver={this.hovered}>
                <h1>{this.props.candidate}</h1>
                <h2>{this.state.counter}</h2>
                <h3>{this.props.age}</h3>
                <h4>{this.state.hover}</h4>
                </div>
            </div>
        );
    }
}
 
export default Vote;