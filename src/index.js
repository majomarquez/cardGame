import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import './index.css';
import  '../node_modules/devicons/css/devicons.css' //iconos de  tech
import '../node_modules/react-flipcard-2/dist/react-flipcard-2.js' // npm dar vuelta la carta

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));// reactdom Se encarga de dibujar  , primero el parametro que va a dibujar y donde

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
