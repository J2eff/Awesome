import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://172.16.89.9:8800',
});

export default instance;
