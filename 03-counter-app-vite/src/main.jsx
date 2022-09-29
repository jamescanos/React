import React from 'react';
import ReactDOM from 'react-dom/client';

// Se usa cuando es un default
//import App from './HelloWorldApp';
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<CounterApp value = { 1 }  /> */}
        <FirstApp title = "Hola" />
    </React.StrictMode>
);