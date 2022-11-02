import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZGVsYXkiLCJ1c2VydXBkYXRlQVQiOiIyMDIyLTEwLTI2VDE3OjIwOjQ4IiwidXNlckRPQiI6IjIwMDAtMTAtMTYiLCJ1c2VyRW1haWwiOiJrZGVsYXkyMEBnbWFpbC5jb20iLCJ1c2VyR2VuZGVyIjoiMSIsInVzZXJOaWNrTmFtZSI6IuqygOuRpeydtCIsInVzZXJSb2xlIjoidXNlciIsImV4cCI6MTY2NzM4NjY2MCwidXNlcklkIjo0LCJpYXQiOjE2NjczNTA2NjAsInVzZXJuYW1lIjoia2RlbGF5In0.wxz9HWbM3bjou7UuEJ18VcE8LD9dZJr7MdD2Xw9UcMI",
  }

});

export default Instance;