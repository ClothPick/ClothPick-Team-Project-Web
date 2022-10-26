import Instance from "./TestInstance";

// async function TestList() {
//   try {
//     const response = await Instance.get('/api/list');
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

async function CommunityTestListGet() {
  try {
    const response = await Instance.get('/api/freeboard');
    // console.log(response.data);
    return response.data;
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
};

async function CommunityTestListPost(title, content) {
  try {
    const response = await Instance.post('/api/freeboard', {
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


// async function CommunityTestListPut(id, titles, contents) {
//   try {
//     const response = await Instance.post(`/api/communitytest/${id}`, {
//       title: titles,
//       content: contents
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };


//이미지 관련
async function BoardImgPost(formData) {
  try {
    const response = await Instance.post("/api/boardimgupload", formData, {
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
async function BoardConnectImgPost(Type, Id, imgId) {
  try {
    const response = await Instance.post('/api/imgconnect', {
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

async function BoardConnectImgGet(board_id) {
  try {
    const response = await Instance.get(`/api/imgconnect/${board_id}`);
    console.log(response.data);
    return response.data;
    console.log(response)
  } catch (error) {
    console.log(error);
  }
};

async function BoardConnectImgListGet(boardType) {
  try {
    const response = await Instance.get(`/api/imglistconnect/${boardType}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const TestMethod = {
  CommunityTestListGet,
  CommunityTestListPost,
  BoardImgPost,
  BoardConnectImgPost,
  BoardConnectImgGet,
  BoardConnectImgListGet

}

export default TestMethod;