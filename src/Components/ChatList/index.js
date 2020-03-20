import React, { Component } from 'react';
import { CssBaseline,List,ListItem, ListItemText,withStyles,Paper,Typography,TextField,FormControlLabel,ListItemIcon,Divider,Avatar,ListItemAvatar,Checkbox,Button} from '@material-ui/core';
import {NotificationImportant} from '@material-ui/icons';
import style from './style';

export class ChatList extends Component {
    render() {

        const { classes } = this.props;
    
     
          return(
            <div className={classes.root}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  color='primary' 
                  onClick={this.newChat} 
                  className={classes.newChatBtn}>
                    New Message
                </Button>
                <List>
                  {
                    
                    this.props.chats.map((chat, index) => {
                      return (
                        <div key={index}>
                          <ListItem 
                            button
                            onClick={() => this.selectChat(index)} 
                            className={classes.listItem} 
                            selected={this.props.chatIndex === index} 
                            alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar >{chat.users.filter(user => user !== this.props.userEmail)[0].split('')[0]}</Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                              primary={chat.users.filter(user => user !== this.props.userEmail)[0]}
                              secondary={
                                <React.Fragment>
                                  <Typography component='span'
                                    color='textPrimary'>
                                      {chat.messages[0].message.substring(0, 30) + ' ...'}
                                  </Typography>
                                </React.Fragment>
                              }/> 
                             </ListItem>
                             {
                               chat.read === false && !this.userIsSender(chat) ?<NotificationImportant className = {classes.unreadMessage}></NotificationImportant> :null
                             }
                             <Divider/>
                         </div>)})
                    }
                </List>
            </div>
          );
        
      }
      userIsSender = (chat) => chat.messages[0].sender === this.props.userEmail;
      newChat = () => this.props.chatBtnClicked();
      selectChat = (index) => this.props.selectChat(index);
    }
    
    export default withStyles(style)(ChatList);
    
    
    
    
    
    
    
    
    
    
    
    
    
   