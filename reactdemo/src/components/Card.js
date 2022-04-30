import React, { Component } from 'react';
import styles from './Card.module.css'

export default class Card extends Component{
    render(){
        return(
            <div className={styles.card}>
                <div >
                    <img src='https://www.w3schools.com/howto/img_avatar.png' className={styles.Image}></img>
                </div>
                <div className={styles.Name}>
                    John Doe
                </div>
                <div className={styles.Info}>
                    Architect & Engineer
                </div>
            </div>
        )
    }
}