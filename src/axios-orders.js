import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-react-database.firebaseio.com/'
});

export default instance;