import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZGVsYXkiLCJ1c2VydXBkYXRlQVQiOiIyMDIyLTEwLTI2VDE3OjIwOjQ4IiwidXNlckRPQiI6IjIwMDAtMTAtMTYiLCJ1c2VyRW1haWwiOiJrZGVsYXlAYy5jb20iLCJ1c2VyR2VuZGVyIjoiMSIsInVzZXJOaWNrTmFtZSI6IuqygOuRpeydtCIsInVzZXJSb2xlIjoidXNlciIsImV4cCI6MTY2NzI0NjI4OCwidXNlcklkIjo0LCJpYXQiOjE2NjcyMTAyODgsInVzZXJuYW1lIjoia2RlbGF5In0.xG3_4lEDu_ZAIqfOXG3Cl-2M3MPaeB0jVA_Pr0_3JQ4",
  }

});

export default Instance;