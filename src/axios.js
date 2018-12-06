import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Authorization': 'AUTH TOKEN FROM INSTANCE', 'Content-Type': 'application/json'}
});

// This interceptor will be available globally through out whole application
let requestInterceptor = instance.interceptors.request.use(
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
// instance.interceptors.request.eject(requestInterceptor);

let responseInterceptor = instance.interceptors.response.use(
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
// instance.interceptors.response.eject(responseInterceptor);

export default instance;
