import React, { Component } from 'react';
import {whiteStyles, withStyles} from '@material-ui/core';
import style from "./style.js";

export class DisplayChat extends Component {
    render() {

        const {classes} = this.props;
       
        return (
            <div className = {classes.content}>
                Hello from Chat Display jdkshfjsdkjsdgbsjkdbjkdsbjsgkdbg jbsdjkfbsdkjfbf
            </div>
        )
    }
}

export default withStyles(style)(DisplayChat);
