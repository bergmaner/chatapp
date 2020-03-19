import React, { Component } from 'react';
import ChatList from '../ChatList';
import {Button,withStyles} from '@material-ui/core';
import style from './style';
import ChatDisplay from '../ChatDisplay';
import ChatTextBox from '../ChatTextBox';
const firebase = require("firebase");

export class Dashboard extends Component {

    constructor()
    {
        super();
        this.state ={
            selectedChat:null,
            chatVisible:true,
            email:null,
            chats :[]

        };
    }
    signOut = (e) =>{
        firebase.auth().signOut();
    }
    selectChat = (chatIndex) =>{
       
        this.setState({selectedChat:chatIndex});
    }

    chatBtnClicked = () =>this.setState({chatVisible:true,selectedChat:null});

    componentDidMount=()=>
    {
        firebase.auth().onAuthStateChanged(async user =>{
            if(!user)this.props.history.push('/login');
            else{
                await firebase 
                .firestore()
                .collection('chats')
                .where('users','array-contains',user.email)
                .onSnapshot(async res =>{
                    const chats = res.docs.map(doc => doc.data());
                    await this.setState({email:user.email,chats:chats});
                    console.log(this.state);
                });
              
            }
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ChatList history={this.props.history}
                chats={this.state.chats}
                userEmail={this.state.email}
                selectChat={this.selectChat} 
                chatBtnClicked={this.chatBtnClicked}
                chats={this.state.chats}
                chatIndex={this.state.selectedChat}/>
                {
                    this.state.chatVisible ?  <ChatDisplay user = {this.state.email} chat = {this.state.chats[this.state.selectedChat]}></ChatDisplay> : null
                }
                {
                    this.state.selectedChat !== null && this.state.chatVisible !== false ?
                    <ChatTextBox></ChatTextBox>
                    :null
                }
              
                 <Button 
                  variant="contained" 
                  fullWidth 
                  color='primary' 
                  onClick={this.signOut} 
                  className={classes.signOut}
                  >
                    signOut
                </Button>
            </div>
        )
    }
}

export default withStyles(style)(Dashboard);
