import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087'
  // baseURL: 'http://192.168.0.109:80'
});

export default Instance;