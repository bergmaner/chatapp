import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { CssBaseline,Container,withStyles,Paper,Typography,TextField,FormControlLabel,Checkbox,Button} from '@material-ui/core';
import style from './style';

const firebase = require("firebase");


export class Login extends Component {

    constructor()
    {
        super();
        this.state =
        {
            email:null,
            password:null,
            loginError:''
        };
    }
    submitLogin = async(e) =>{
        e.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{
            this.props.history.push("/dashboard");
        },err => {
            console.log(err);
            this.setState({loginError:'Server Error'});
        })
        console.log("SUBMITTING",this.state);
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
       
        const {classes} = this.props;
        return (   
            
                <Paper className = {classes.paper}>
                     <CssBaseline />
                    <Typography variant ="h3">
                        Login
                    </Typography>
                    <form onSubmit={(e) => this.submitLogin(e)} className = {classes.form}>
                        <TextField
                         onChange={(e) => this.onChange(e)}
                         variant="outlined"
                         margin="normal"
                         fullWidth
                         name="email"
                         label="Email Address"
                         id="email"
                         autoComplete="email"/>

                        <TextField
                        onChange={(e) => this.onChange(e)}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
            
                        >
                            Login
                        </Button>
                        </form>
                        {
                            this.state.loginError ? <Typography color="secondary" className = {classes.error}>{this.state.loginError}</Typography>:null
                        }
                        <Link to="/signup" variant="body2" className={classes.signup}>Don't have an account? Sign Up</Link>
                      
                </Paper>
        )
    }
}

export default withStyles(style)(Login);