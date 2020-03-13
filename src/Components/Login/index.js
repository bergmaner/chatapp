import React, { Component } from 'react';
import { CssBaseline,withStyles,Container,Paper,Typography,TextField,FormControlLabel,Checkbox,Button,Box,Grid} from '@material-ui/core';
import style from './style';
const firebase = require("firebase");

export class Login extends Component {
    render() {
        const {classes} = this.props;
        return (   
                <Paper className = {classes.paper}>
                     <CssBaseline />
                    <Typography variant ="h3">
                        Login
                    </Typography>
                    <form className = {classes.form}>
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
                        <a href="#" variant="body2"className={classes.signup}>Don't have an account? Sign Up</a>
                    </form>
                </Paper>
            
        )
    }
}

export default withStyles(style)(Login);