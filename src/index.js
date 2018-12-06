import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// This interceptor will be available globally through out whole application
let requestInterceptor = axios.interceptors.request.use(
    request => {
        console.log(request);

        // Edit request config here

        return request; // Need to return request always
    },
    error => { // This will only execute if request sending fails, not on error during response
        console.log(error);
        return Promise.reject(error);   // Forwarding to request chain
    }
);

// To remove interceptor
// axios.interceptors.request.eject(requestInterceptor);

let responseInterceptor = axios.interceptors.response.use(
    response => {
        console.log(response);
    
        // Edit response config here
    
        return response; // Need to return reponse always
    },
    error => { // This will execute when error during response
        console.log(error);
        return Promise.reject(error);   // Forwarding to response chain
    }
);

// To remove interceptor
// axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
