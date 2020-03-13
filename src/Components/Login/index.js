import React, { Component } from 'react';
import { CssBaseline,withStyles,Container,Paper,Typography,TextField,FormControlLabel,Checkbox,Button,Box,Grid} from '@material-ui/core';
import style from './style';
const firebase = require("firebase");

export class Login extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Container className={classes.container}>
                <CssBaseline />
                <Paper className = {classes.paper}>
                    <Typography variant ="h3">
                        Sign in
                    </Typography>
                    <form className = {classes.form}>
                        <TextField
                         margin="normal"
                         fullWidth
                         name="email"
                         label="Email Address"
                         id="email"
                         autoComplete="email"/>

                        <TextField
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
            
                        >
                            Sign In
                        </Button>
                        <a href="#" variant="body2">Don't have an account? Sign Up</a>
                    </form>
                </Paper>
            </Container>
        )
    }
}

export default withStyles(style)(Login);