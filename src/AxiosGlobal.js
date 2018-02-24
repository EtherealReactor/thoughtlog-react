import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:10010/'
});


export default instance;