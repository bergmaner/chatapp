import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';

const firebase = require("firebase");
require ("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyA6Ccjz0pBXgQlerA7Tj7BnyzboTGsajOQ",
    authDomain: "chat-app-1ecbc.firebaseapp.com",
    databaseURL: "https://chat-app-1ecbc.firebaseio.com",
    projectId: "chat-app-1ecbc",
    storageBucket: "chat-app-1ecbc.appspot.com",
    messagingSenderId: "933134151767",
    appId: "1:933134151767:web:68b14b42369a741ff03312",
    measurementId: "G-12BCPKQMZP"
 
});
const routing = 
(
<Router>
    <div id= "routing-container">
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
    </div>
</Router>

);
ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
