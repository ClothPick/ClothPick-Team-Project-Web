import Instance from "./TestInstance";

// 유저 정보 요청
async function ReturnUserInfo() {
    try {
        const response = await Instance.get('/api/v1/userinfo');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const UserMethod = {
    ReturnUserInfo,
}

export default UserMethod;