import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:10010/'
  // baseURL: 'http://54.242.138.23/api/'
  
});


export default instance;