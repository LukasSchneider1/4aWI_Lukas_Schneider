import React, { Component } from 'react';
import styles from './Button.module.css'

export default class ButtonSendar extends Component{
    render(){
        return(
            <div className={styles.ButtonDiv}>
                <button className={styles.Button}>Sendar</button>
            </div>
        )
    }
}