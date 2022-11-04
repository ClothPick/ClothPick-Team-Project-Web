import Instance from "./TestInstance";

// 게시글 조회 All List
async function CommunityTestListGet() {
  try {
    const response = await Instance.get('/api/v1/boardlist');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시물 조회 if BoardType
async function BoardTextTypeList(boardType) {
  try {
    const response = await Instance.get(`/api/v1/boardlist/${boardType}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 작성
async function CommunityTestListPost(type, title, content) {
  try {
    const response = await Instance.post('/api/v1/boardtext', {
      boardType: type,
      boardTitle: title,
      boardContent: content
    });
    console.log(response.data);
    return response.data;
    // 게시글 아이디 리턴
  } catch (error) {
    console.log(error);
  }
};

// 게시물 수정
async function BoardUpdate(boardId, boardTitle, boardContent) {
  try {
    const response = await Instance.put(`/api/v1/boardtext/${boardId}`, {
      boardTitle: boardTitle,
      boardContent: boardContent
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// 게시물 삭제
async function BoardDelete(boardId) {
  try {
    const response = await Instance.delete(`/api/v1/boardtext/${boardId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


//이미지 전송
async function BoardImgPost(formData) {
  try {
    const response = await Instance.post("/api/v1/boardimg", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response.data); // 이미지 아이디 리턴
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 이미지 리소스 접근
async function BoardConnectImgGet(boardtype) {
  try {
    const response = await Instance.get(`/api/v1/boardimgconnect/list/boardtype/${boardtype}`)
    console.log(response.data);
    return response.data;
    console.log(response)
  } catch (error) {
    console.log(error);
  }
};

// 보드 아이디로 이미지 아이디 조회
async function ConnectBoardImgBoardIdList(boardId) {
  try {
    const response = await Instance.get(`/api/v1/boardimgconnect/list/boardid/${boardId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// 보드 타입 전체 조회 이미지 아이디 조회
async function ConnectBoardImgBoardTypeList(boardType) {
  try {
    const response = await Instance.get(`/api/v1/boardimgconnect/list/boardtype/${boardType}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// 옷, 이미지 post
async function BoardConnectImgPost(Type, Id, imgId) {
  try {
    const response = await Instance.post('/api/v1/boardimgconnect', {
      boardType: Type,
      boardId: Id,
      fileUniqueName: imgId
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 추천수 내림차순 정렬 랭킹 상위 5개
async function BoardTypeRecommendRanking() {
  try {
    const response = await Instance.get("/api/v1/RecommendRanking");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
//유저 스크랩 목록 상세 전체 조회
async function MyPageScrapListGet(){
  try{
    const response=await Instance.get('/api/v1/scraplist/boardinfo')
    // console.log(response.data);
    return response.data;
  }catch(error){
    console.log(error);
  }
};

//유저 스크랩 정보 삭제
async function ScrapDelete(boardId,boardType){
  try{
    const response=await Instance.delete('/api/v1/scrap',{
        boardId:boardId,
        boardType:boardType
    })
    return response.data;
  }catch(error){
    console.log(error);
  }
}

//유저 스크랩 추가
async function ScrapInsert(boardId,boardType){
  try{
    const response=await Instance.post('/api/v1/scrap',{
      boardId:boardId,
      boardType:boardType
    })
    return response.data;
  }catch(error){
    console.log(error);
  }
}



const TestMethod = {
  CommunityTestListGet,
  BoardTextTypeList,
  CommunityTestListPost,
  BoardImgPost,
  BoardUpdate,
  BoardDelete,
  BoardConnectImgGet,
  BoardConnectImgPost,
  ConnectBoardImgBoardIdList,
  ConnectBoardImgBoardTypeList,
  BoardTypeRecommendRanking,
  MyPageScrapListGet,
  ScrapDelete,
  ScrapInsert
}

export default TestMethod;