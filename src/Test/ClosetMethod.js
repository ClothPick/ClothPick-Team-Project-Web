import Instance from "./TestInstance";

// 옷 데이터 전체 조회
async function ClosetInfoGet() {
    try {
        const response = await Instance.get('/api/v1/closetlist');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// 옷 데이터 작성
async function ClosetInfoPost(clothType, clothDetail, clothColor, clothPattern, clothTexture, clothStyle, clothKeyword, clothPref) {
    try {
        const response = await Instance.post('/api/v1/closet', {
            clothType: clothType,
            clothDetail: clothDetail,
            clothColor: clothColor,
            clothPattern: clothPattern,
            clothTexture: clothTexture,
            clothStyle: clothStyle,
            clothKeyword: clothKeyword,
            clothPref: clothPref,
        });
        console.log(response.data);
        return response.data;
        // 옷 아이디(clothId) 리턴
    } catch (error) {
        console.log(error);
    }
};

const ClosetMethod = {
    ClosetInfoGet,
    ClosetInfoPost,
}

export default ClosetMethod;