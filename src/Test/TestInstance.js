import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZGVsYXkiLCJ1c2VydXBkYXRlQVQiOiIyMDIyLTEwLTI2VDE3OjIwOjQ4IiwidXNlckRPQiI6IjIwMDAtMTAtMTYiLCJ1c2VyRW1haWwiOiJrZGVsYXlAYy5jb20iLCJ1c2VyR2VuZGVyIjoiMSIsInVzZXJOaWNrTmFtZSI6IuqygOuRpeydtCIsInVzZXJSb2xlIjoidXNlciIsImV4cCI6MTY2NzMwODUyNiwidXNlcklkIjo0LCJpYXQiOjE2NjcyNzI1MjYsInVzZXJuYW1lIjoia2RlbGF5In0.Y-eZD_VjSGp1kBdlOPMmx6B7mE5yiAt3kKAbZXKZIT8",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": true,
  }

});

export default Instance;