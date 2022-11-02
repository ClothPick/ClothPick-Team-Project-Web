import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhIiwidXNlcnVwZGF0ZUFUIjoiMjAyMi0xMC0wNlQxMjowMjo1NiIsInVzZXJET0IiOiIxOTk3LTEwLTE2IiwidXNlckVtYWlsIjoiYWRtaW5AZ2FtaWwuY29tIiwidXNlckdlbmRlciI6IjAiLCJ1c2VyTmlja05hbWUiOiLqtIDrpqzsnpAiLCJ1c2VyUm9sZSI6ImFkbWluIiwiZXhwIjoxNjY3NDIwOTgxLCJ1c2VySWQiOjEsImlhdCI6MTY2NzM4NDk4MSwidXNlcm5hbWUiOiJhIn0.aqtDV4x65I02GgNNtNVD8-67rKnisQUyinKIBL1FNNE",
  }

});

export default Instance;