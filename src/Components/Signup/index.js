import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { CssBaseline,withStyles,Paper,Typography,TextField,Button} from '@material-ui/core';
import style from './style';
const firebase = require("firebase");

export class Signup extends Component {
    constructor()
    {
        super();
        this.state = 
        {
            email:null,
            password:null,
            passwordConfirmation:null,
            signupError:''
        };
    }
    
    submitSignup = (e) => {
        e.preventDefault();

        if( this.state.password !== this.state.passwordConfirmation){
            this.setState({signupError:'Passwords do not match!'})
            return;
        }
        firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(authRes =>{
        const userObj = {
            email:authRes.user.email
        };
        firebase
        .firestore()
        .collection('users')
        .doc(this.state.email)
        .set(userObj)
        .then(() => {
            this.props.history.push('/dashboard')
        },dbErr =>{
            console.log(dbErr);
            this.setState({signupError:'Failed to add user'});
        
        })
       
    },authErr =>{
        console.log(authErr.message);
        this.setState({signupError:authErr.message});
    }
    )}
    onChange = (type,e) => {
        switch(type)
        {
            case 'email':
                this.setState({email : e.target.value});
                break;
            case 'password':
                this.setState({password : e.target.value});
                break;
            case 'passwordConfirmation':
                this.setState({passwordConfirmation : e.target.value});
                break;
        }
        
    }
   

    render() {
        const {classes} = this.props;
        return (
            <Paper className = {classes.paper}>
            <CssBaseline />
           <Typography className = {classes.header} variant ="h3">
               Create a new Account
           </Typography>
           <form onSubmit = {(e) => this.submitSignup(e)} className = {classes.form}>
                
               <TextField
                onChange = {(e) => this.onChange("email",e)}
                variant="outlined"
                required
                margin="normal"
                fullWidth
                name="email"
                label="Email Address"
                id="email"
                autoComplete="email"/>

               <TextField
               onChange = {(e) => this.onChange("password",e)}
               variant="outlined"
               required
               margin="normal"
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
               />
              
              <TextField
              onChange = {(e) => this.onChange("passwordConfirmation",e)}
               variant="outlined"
               required
               margin="normal"
               fullWidth
               name="passwordConfirmation"
               label="Confirm Password"
               type="password"
               id="passwordConfirmation"
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
           </form>
           {
               this.state.signupError?<Typography color="secondary" className={classes.error}>{this.state.signupError}</Typography>:null
            }
           
           <Link to='/login' variant="body2"className={classes.login}>Do you have an account? Sign in</Link>
           
       </Paper>
        )
    }
   
}

export default withStyles(style)(Signup);
