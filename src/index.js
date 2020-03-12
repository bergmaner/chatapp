import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebase = requie("firebase");
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
ReactDOM.render(<div >HELOODOUD </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
