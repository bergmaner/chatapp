import React, { Component } from 'react';
import ChatList from '../ChatList';

const firebase = require("firebase");

export class Dashboard extends Component {

    constructor()
    {
        super();
        this.state ={
            selectedChat:null,
            ChatVisible:false,
            email:null,
            chats :[]

        };
    }
    selectChat = (chatIndex) =>{
        console.log(`Selected Chat: ${chatIndex}`);
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
        return (
            <div>
                <ChatList history={this.props.history}
                chats={this.state.chats}
                userEmail={this.state.email}
                selectChat={this.selectChat} 
                chatBtnClicked={this.chatBtnClicked}
                chats={this.state.chats}
                chatIndex={this.state.selectedChat}/>
            </div>
        )
    }
}

export default Dashboard;
