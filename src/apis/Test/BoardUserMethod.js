import Instance from "./UserInstance";
// import Instance from "./TestMethod";

// 게시글 작성
async function BoardTextPost(boardType, title, content) {
  try {
    const response = await Instance.post('/api/v1/boardtext', {
      boardType: boardType,
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
// 게시글 수정
async function BoardTextUpdate(boardId ,title, content) {
  try {
    const response = await Instance.put(`/api/v1/boardtext/${boardId}`, {
      boardTitle: title,
      boardContent: content
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 삭제
async function BoardTextDelete(boardId) {
  try {
    const response = await Instance.delete(`/api/v1/boardtext/${boardId}`);
    console.log(response.data);
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


//댓글 작성
async function BoardLayer1CommentPost(boardId, boardType, commentContent) {
  try {
    const response = await Instance.post('/api/v1/comment', {
      boardId: boardId,
      boardType: boardType,
      commentContent: commentContent
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//댓댓글 작성
async function BoardLayer2CommentPost(boardId, boardType, commentContent, commentParentsId) {
  try {
    const response = await Instance.post('/api/v1/comment', {
      boardId: boardId,
      boardType: boardType,
      commentContent: commentContent,
      commentParentsId: commentParentsId
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//댓글 수정
async function BoardCommentPut(commentId, commentContent) {
  try {
    const response = await Instance.put(`/api/v1/comment/${commentId}`, {
      commentContent: commentContent
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//댓글 삭제
async function BoardCommentDelete(commentId) {
  try {
    const response = await Instance.delete(`/api/v1/comment/${commentId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//추천 하기
async function BoardRecommendPost(boardId, boardType) {
  try {
    const response = await Instance.post('/api/v1/recommend', {
      boardId: boardId,
      boardType: boardType,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//추천 정보 검색
async function BoardRecommendget(boardId) {
  try {
    const response = await Instance.get(`/api/v1/recommend/${boardId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//스크랩 리스트
async function Boardscraplist() {
  try {
    const response = await Instance.get(`/api/v1/scraplist`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//스크랩 리스트
async function Boardscraplistinfo() {
  try {
    const response = await Instance.get(`/api/v1/scraplist/boardinfo`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//스크랩 작성
async function BoardscrapPost(boardId, boardType) {
  try {
    const response = await Instance.post(`/api/v1/scrap`,{
      boardId: boardId,
      boardType: boardType
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};//스크랩 삭제
async function BoardscrapDel(boardId) {
  try {
    const response = await Instance.delete(`/api/v1/scrapdel/${boardId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const BoardUser = {
  BoardImgPost,
  BoardConnectImgPost,
  BoardLayer1CommentPost,
  BoardLayer2CommentPost,
  BoardTextUpdate,
  BoardTextDelete,
  BoardTextPost,
  BoardCommentDelete,
  BoardRecommendPost,
  BoardRecommendget,
  Boardscraplist,
  BoardscrapPost,
  BoardscrapDel,
  BoardCommentPut,
  Boardscraplistinfo
}

export default BoardUser;