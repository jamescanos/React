import React from 'react';
import ReactDOM from 'react-dom/client';

// Se usa cuando es un default
//import App from './HelloWorldApp';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp/> 
        <FirstApp/> 
    </React.StrictMode>
);