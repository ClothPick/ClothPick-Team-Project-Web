import Instance from "./LoginInstance";

async function LoginPost (id, pw) {
  try {
      const response = await Instance.post('/api/v1/login',{
          "username": id,
          "password": pw
      });
      sessionStorage.setItem("Authorization", response.data);
      console.log(sessionStorage.getItem("Authorization"))
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};

async function RegisterPost (id, pw, email, name, gender, dob, code) {
  try {
      const response = await Instance.post('/api/v1/signup',{
        "username": id,
        "password": pw,
        "userEmail": email,
        "userNickName": name,
        "userGender": gender,
        "userDOB": dob,
        "emailCode":code
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};


async function IdCheckPost (id      ) {
  try {
      const response = await Instance.post('/api/v1/signup/idch',{
        "username": id,
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};

async function EmailCheckPost (email) {
  try {
      const response = await Instance.post('/api/v1/signup/emailch',{
        "userEmail": email,
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};
async function NickNameCheckPost (name) {
  try {
      const response = await Instance.post('/api/v1/signup/nickch',{
        "userNickName": name,
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};
async function CodeSendPost (email, type) {
  try {
      const response = await Instance.post('/api/v1/mail/send',{
        "userEmail": email,
        "codeType": type
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};
async function CodeCheckPost (email, type, code) {
  try {
      const response = await Instance.post('/api/v1/mail/check',{
        "userEmail": email,
        "codeType": type,
        "emailCode": code
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};
async function IdInfoSnedPost (email, type, code) {
  try {
      const response = await Instance.post('/api/v1/search/username',{
        "userEmail": email,
        "codeType": type,
        "emailCode": code
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};
async function PasswordInfoSnedPost (email, type, code) {
  try {
      const response = await Instance.post('/api/v1/search/password',{
        "userEmail": email,
        "codeType": type,
        "emailCode": code
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
  }
};
const LoginMethod = {
  LoginPost,
  RegisterPost,
  IdCheckPost,
  EmailCheckPost,
  NickNameCheckPost,
  CodeSendPost,
  CodeCheckPost,
  IdInfoSnedPost,
  PasswordInfoSnedPost
}

export default LoginMethod;