import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZGVsYXkiLCJ1c2VydXBkYXRlQVQiOiIyMDIyLTEwLTI2VDE3OjIwOjQ4IiwidXNlckRPQiI6IjIwMDAtMTAtMTYiLCJ1c2VyRW1haWwiOiJrZGVsYXkyMEBnbWFpbC5jb20iLCJ1c2VyR2VuZGVyIjoiMSIsInVzZXJOaWNrTmFtZSI6IuqygOuRpeydtCIsInVzZXJSb2xlIjoidXNlciIsImV4cCI6MTY2NzM0NzM2OCwidXNlcklkIjo0LCJpYXQiOjE2NjczMTEzNjgsInVzZXJuYW1lIjoia2RlbGF5In0.v2OxY3T95YIyYEVoQwjmu8IbzwUG-TFfmSScyWlhGR8",
  }

});

export default Instance;