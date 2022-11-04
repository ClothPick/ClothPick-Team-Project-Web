import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    // Authorization:`Bearer ${sessionStorage.getItem("Authorization")}`

    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": true,
  }
});

export default Instance;