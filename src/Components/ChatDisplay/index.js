import React, { Component } from 'react';
import { withStyles} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import style from "./style.js";

export class DisplayChat extends Component {

    onClick = () => this.props.hideChat();
    render() {

        const {classes,chat,user} = this.props;
        
        
            if(chat === undefined)
            {
                return (<main className={classes.content}></main>)
            }
            else
            {
                return(
                    <React.Fragment>
                    <div className={classes.header}>
                    {chat.users.filter(usr => usr!==user)[0]}
                    <ArrowBack
                    className = {classes.back}
                    onClick = {this.onClick}
                    >
                    </ArrowBack>
                    </div>
                <main className={classes.content}>
                    <div className = {classes.messagesList}>
                    {
                        
                    chat.messages.map((message,index) =>{
                        return(<div key = {index}><div key={index} className={message.sender === user ? classes.userMsg : classes.friendMsg}>
                            {message.message}
                        </div>
                        </div>)
                    })
                }
                </div>
                </main>
                </React.Fragment>
                )
            }
        
    }
}

export default withStyles(style)(DisplayChat);
