import React, { Component } from 'react';
import ChatList from '../ChatList';
import {Button,withStyles} from '@material-ui/core';
import style from './style';
import ChatDisplay from '../ChatDisplay';
import ChatTextBox from '../ChatTextBox';
import NewChat from '../NewChat';

const firebase = require("firebase");

export class Dashboard extends Component {

    constructor()
    {
        super();
        this.state ={
            selectedChat:null,
            chatVisible:false,
            newChatVisible:false,
            email:null,
            chats :[]

        };
    }
    signOut = (e) =>{
        firebase.auth().signOut();
    }
    selectChat = async (chatIndex) =>
    {
       await this.setState({selectedChat:chatIndex, chatVisible:true,newChatVisible:false});
       console.log(this.state);
       this.messageRead();
        
    } 

    submitMessage = (msg) =>{
        const chatKey = this.createChatKey(this.state.chats[this.state.selectedChat].users
            .filter(user => user !== this.state.email)[0]);
            firebase
                .firestore()
                .collection('chats')
                .doc(chatKey)
                .update({
                    messages: firebase.firestore.FieldValue.arrayUnion({
                        message: msg,
                        sender: this.state.email,
                        timestamp: Date.now()
                    }),
                    read:false
                });
    }

    createChatKey = (friend) => [this.state.email,friend].sort().join(':');

    chatBtnClicked = () =>this.setState({newChatVisible:true,selectedChat:null});

    hideChat = () =>this.setState({selectedChat:null});

    messageRead = () => 
    {
        const chatKey = this.createChatKey(this.state.chats[this.state.selectedChat].users.filter(user => user !== this.state.email)[0])
        if(this.lastMessageNotWriteSender(this.state.selectedChat))
        {
            firebase
            .firestore()
            .collection('chats')
            .doc(chatKey)
            .update({
                read:true
            })
        }
        else
        {
            console.log('User is sender');
        }
    }

    goToChat = async (chatKey,msg) => 
    {
        const usersInChat = chatKey.split(':');
        const chat = this.state.chats.find(chat => usersInChat.every(user => chat.users.includes(user) ));
        this.setState({chatVisible : true});
        await this.selectChat(this.state.chats.indexOf(chat));
        this.submitMessage(msg);
        console.log("goToChat");
    }

    newChat = async (chatObj) =>
    {
        const chatKey = this.createChatKey(chatObj.sendTo);
        await firebase
        .firestore()
        .collection('chats')
        .doc(chatKey)
        .set({
            read : false,
            users : [this.state.email, chatObj.sendTo],
            messages : [{
                message : chatObj.message,
                sender : this.state.email
            }] 
        })
        this.setState({newChatVisible : false,chatVisible : true});
        this.selectChat(this.state.chats.length - 1);
        console.log('newChat');
    }

    lastMessageNotWriteSender = (chatIndex) => this.state.chats[chatIndex].messages[0].sender !== this.state.email;

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
                    chats.forEach(chat => chat.messages.reverse())
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
                chatIndex={this.state.selectedChat}
                />
                {
                    this.state.chatVisible ?  <ChatDisplay hideChat={this.hideChat} user = {this.state.email} chat = {this.state.chats[this.state.selectedChat]}></ChatDisplay> : null
                }
                {
                    this.state.selectedChat !== null && this.state.chatVisible !== false ?
                    <ChatTextBox submitMessage ={this.submitMessage}></ChatTextBox>
                    :null
                }
              {
                   this.state.newChatVisible ? <NewChat goToChat = {this.goToChat} newChat = {this.newChat}></NewChat> :null
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
