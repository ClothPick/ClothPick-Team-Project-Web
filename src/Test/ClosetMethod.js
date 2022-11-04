import Instance from "./TestInstance";

// 옷 데이터 전체 조회
async function ClosetInfoGet() {
    try {
        const response = await Instance.get('/api/v1/closetlist');
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
        return response.data;
        // 옷 아이디(clothId) 리턴
    } catch (error) {
        console.log(error);
    }
};

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
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// 옷, 이미지 연결 get
async function ConnectClosetImgGet() {
    try {
        const response = await Instance.get("/api/v1/clothimglist")
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
//닉네임 얻기
async function GetNickName() {
    try{
        const response = await Instance.get("/api/v1/userinfo")
        console.log(response.data);
        return response.data;

    }catch(error){
        console.log(error);
    }
}
//비밀번호 초기화
async function ResetPassword(password){
    try{
      const response=await Instance.post('/api/v1/reset/password',{
        password: password
      });
      // console.log(response.data);
      return response.data;
    }catch(error){
      console.log(error);
    }
  }
const ClosetMethod = {
    GetNickName,
    ClosetInfoGet,
    ClosetInfoPost,
    ClosetImgUpload,
    ConnectClosetImgPost,
    ConnectClosetImgGet,
    ClosetInfoDelete,
    ResetPassword,

}

export default ClosetMethod;