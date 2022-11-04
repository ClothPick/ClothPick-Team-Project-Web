import Instance from "./ResourcesInstance";

async function DatPost(boardId, boardType, commentContent) {
  try {
      const response = await Instance.get('/api/v1/comment',{
        "boardId":boardId,
        "boardType":boardType,
        "commentContent":commentContent
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
      return error;
  }
};

const ResourMethod = {
  DatPost
}

export default ResourMethod;