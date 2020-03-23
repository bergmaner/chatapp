import React, { Component } from 'react';
import { CssBaseline,Container,withStyles,Paper,Typography,Input,InputLabel,FormControl,TextField,FormControlLabel,Checkbox,Button} from '@material-ui/core';
import style from './style';

const firebase = require("firebase");

export class NewChat extends Component {
    
   

    render() {

        const {classes} = this.props;

        return (
            
                <Paper className = {classes.paper} >
                    <Typography component = "h1" variant = "h5">Send a message!</Typography>
                    <form className={classes.form} >
            
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
                </Paper>
            
        )
    }
}

export default withStyles(style)(NewChat)