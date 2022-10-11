import Instance from "./TestInstance";

async function TestList() {

  try {
    const response = await Instance.get('/api/list');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

async function CommunityTestListGet() {
  try {
    const response = await Instance.get('/api/freeboard');
    console.log(response.data);
    return response.data;
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

async function CommunityTestListDelete(id) {
  try {
    const response = await Instance.delete(`/api/freeboard/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

async function CommunityTestListPut(id, titles, contents) {
  try {
    const response = await Instance.post(`/api/communitytest/${id}`, {
      title: titles,
      content: contents
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

async function BoardConnectImgGet(board_id) {
  try {
    const response = await Instance.get(`/api/imgconnect/${board_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const TestMethod = {
  TestList,
  CommunityTestListGet,
  CommunityTestListPost,
  CommunityTestListPut,
  BoardConnectImgGet,
  CommunityTestListDelete
}

export default TestMethod;