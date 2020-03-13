import React, { Component } from 'react';
import { CssBaseline,withStyles,Container,Paper,Typography,TextField,FormControlLabel,Checkbox,Button,Box,Grid} from '@material-ui/core';
import style from './style';
const firebase = require("firebase");

export class Signup extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper className = {classes.paper}>
            <CssBaseline />
           <Typography variant ="h3">
               Create a new Account
           </Typography>
           <form className = {classes.form}>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="nickname"
                label="Nickname"
                id="nickname"
                
                />
               <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Email Address"
                id="email"
                autoComplete="email"/>

               <TextField
               variant="outlined"
               margin="normal"
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
               />
              
               <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
   
               >
                   Join
               </Button>
               <a href="#" variant="body2"className={classes.login}>Do you have an account? Sign in</a>
           </form>
       </Paper>
        )
    }
}

export default withStyles(style)(Signup);
