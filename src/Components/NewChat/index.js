import React, { Component } from 'react';
import { CssBaseline,Container,withStyles,Paper,Typography,Input,InputLabel,FormControl,TextField,FormControlLabel,Checkbox,Button} from '@material-ui/core';
import style from './style';

const firebase = require("firebase");

export class NewChat extends Component {
    
    constructor ()
    {
        super();
        this.state = 
        {
            friendemail:'',
            message:''
        };
    }

    onChange = (e) =>
    {
        this.setState({[e.target.name]: e.target.value});
    }

    userExists = async () =>
    {
        
        const users = await firebase 
        .firestore()
        .collection('users')
        .get();
    const exists = users.docs
        .map(doc => doc.data().email)
        .includes(this.state.friendemail);
        this.setState({serverError : !exists})
        return exists;  
    }

    chatExists = async () =>
    {
        const chatKey = this.createChatKey();
        console.log(`chatKey: ${chatKey}`)
        const chat = await 
        firebase
      .firestore()
      .collection('chats')
      .doc(chatKey)
      .get();
    console.log(chat.exists);
    return chat.exists;

    }
   
    sendMessage = async (e) =>
    {
        
        e.preventDefault();
        const userExists = await this.userExists();

        if(userExists)
        {
           
            const chatExists = await this.chatExists();
            chatExists ? this.goToChat() : this.createChat();
        }
       
    
    }

    createChat = () => 
    {
        this.props.newChat({
            sendTo : this.state.friendemail,
            message : this.state.message
        });
    }

    goToChat = () => this.props.goToChat(this.createChatKey(),this.state.message);

    createChatKey = () =>
    {
        return [firebase.auth().currentUser.email,this.state.friendemail].sort().join(':');
    }

    render() {

        const {classes} = this.props;

        return (
            
                <Paper className = {classes.paper} >
                    <Typography component = "h1" variant = "h5">Send a message!</Typography>
                    <form className={classes.form} onSubmit = { (e) => this.sendMessage(e)} >
            
            <TextField
               onChange = {(e) => this.onChange(e)}
               variant = "outlined"
               margin = "normal"
               fullWidth
               name = "friendemail"
               label = "Email Address"
               id = "friendemail"
               autoComplete = "email"
            />
            <TextField
               onChange = {(e) => this.onChange(e)}
               variant = "outlined"
               margin = "normal"
               fullWidth
               name = "message"
               label = "Enter your message"
               id = "message"
            />                   
              
           
            <Button fullWidth variant='contained' className = {classes.submit} color='primary' type='submit'>Send</Button>
          </form>
          {
            this.state.serverError ? 
            <Typography component='h5' variant='h6'color="secondary">
              User doesn't exist
            </Typography> :
            null
          }
                </Paper>
            
        )
    }
}

export default withStyles(style)(NewChat)