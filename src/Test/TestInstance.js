import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZGVsYXkyMDAwIiwidXNlcnVwZGF0ZUFUIjoiMjAyMi0xMS0wM1QxMDozNjo1MiIsInVzZXJET0IiOiIyMDAwLTEwLTE2IiwidXNlckVtYWlsIjoicmxhd2xkdXMwNjA1QG5hdmVyLmNvbSIsInVzZXJHZW5kZXIiOiIxIiwidXNlck5pY2tOYW1lIjoi7KC464uIIiwidXNlclJvbGUiOiJ1c2VyIiwiZXhwIjoxNjY3NTU2MzgxLCJ1c2VySWQiOjksImlhdCI6MTY2NzUyMDM4MSwidXNlcm5hbWUiOiJrZGVsYXkyMDAwIn0.QQw-MQUPAAYFdDcCHjXDtKm8WWciZjBrLwcphnPCfqU",
  }

});

export default Instance;