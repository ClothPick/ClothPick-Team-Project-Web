import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.109'
});

export default Instance;
