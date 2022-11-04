import Instance from "./UserInstance";

// 유저 정보 요청
async function ReturnUserInfo() {
    try {
        if(sessionStorage.getItem("Authorization") !== 'null'){
            const response = await Instance.get('/api/v1/userinfo');
            // console.log(sessionStorage.getItem("Authorization"))
            // console.log(response.data);
            return response.data;
        }else{
            return null;
        }

    } catch (error) {
        console.log(sessionStorage.getItem("Authorization"))
        console.log(error);
    }
};

const UserMethod = {
    ReturnUserInfo
}

export default UserMethod;