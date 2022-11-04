import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://192.168.0.101:8087',
  headers:{
    "Content-Type": "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhIiwidXNlcnVwZGF0ZUFUIjoiMjAyMi0xMC0wNlQxMjowMjo1NiIsInVzZXJET0IiOiIxOTk3LTEwLTE2IiwidXNlckVtYWlsIjoiYWRtaW5AZ2FtaWwuY29tIiwidXNlckdlbmRlciI6IjAiLCJ1c2VyTmlja05hbWUiOiLqtIDrpqzsnpAiLCJ1c2VyUm9sZSI6ImFkbWluIiwiZXhwIjoxNjY3NTU3MDA1LCJ1c2VySWQiOjEsImlhdCI6MTY2NzUyMTAwNSwidXNlcm5hbWUiOiJhIn0.w1pG0NqUPuTiuzIqNHowgh2qKh_s0CfL_wRD-OpIBiI'
  }
});

export default Instance;