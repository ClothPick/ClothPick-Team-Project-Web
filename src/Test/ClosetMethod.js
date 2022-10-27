import Instance from "./TestInstance";

// 옷 데이터 전체 조회
async function ClosetInfoGet() {
    try {
        const response = await Instance.get('/api/v1/closetlist');
        // console.log(response.data);
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
        // console.log(response.data);
        return response.data;
        // 옷 아이디(clothId) 리턴
    } catch (error) {
        console.log(error);
    }
};

// 옷 이미지 조회
// async function ClosetImgGet(clothImgName) {
//     try {
//         const response = await Instance.get(`/api/v1/closetimg/${clothImgName}`)
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// }

// 옷 이미지 업로드
async function ClosetImgUpload(formData) {
    try {
        const response = await Instance.post("/api/v1/closetimgupload", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// 옷, 이미지 연결 post
async function ConnectClosetImgPost(imgName, clothId) {
    try {
        const response = await Instance.post("/api/v1/clothimgconnect", {
            clothImgName: imgName,
            clothId: clothId,
        });
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// 옷, 이미지 연결 get
async function ConnectClosetImgGet() {
    try {
        const response = await Instance.get("/api/v1/clothimglist")
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

//옷, 이미지 / 옷 정보 삭제
async function ClosetInfoDelete(clothId) { // 연결 테이블에 있는 clothId
    try {
        const response = await Instance.delete(`/api/v1/clothDelete/${clothId}`, {
            clothId: clothId
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const ClosetMethod = {
    ClosetInfoGet,
    ClosetInfoPost,
    ClosetImgUpload,
    ConnectClosetImgPost,
    ConnectClosetImgGet,
    ClosetInfoDelete,
}

export default ClosetMethod;