import React, { Component } from 'react';
import {TextField,withStyles} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import style from './style';


export class ChatTextBox extends Component {

    constructor(){
        super();
        this.state = {
            text : ''
        };
    }
    onKeyUp = (e) => e.keyCode === 13 ? this.submitMessage() :this.setState({text: e.target.value});
    isValid = (text) => text && text.replace(/\s/g,'').length;
    submitMessage = (e) => 
    {
        if(this.isValid(this.state.text))
        {
            this.props.submitMessage(this.state.text);
            document.querySelector('#chatBox').value = '';
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.chatBoxContainer}>
               <TextField 
                id ='chatBox'
                className = {classes.chatBox}
                placeholder = "Type your message..."
                onKeyUp = {(e) => this.onKeyUp(e)}>
                </TextField>
                <Send 
                onClick = {this.submitMessage}
                className={classes.sendButton}>
                </Send>
            </div>
        )
    }
}

export default withStyles(style)(ChatTextBox);
