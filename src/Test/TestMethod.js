import Instance from "./TestInstance";

async function TestList () {
  try {
    const response = await Instance.get('/api/list');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }};

async function CommunityTestListGet () {
  try {
    const response = await Instance.get('/api/sample');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }};

async function CommunityTestListPost (titles, contents) {
  try {
    const response = await Instance.post('/api/communitytest',{
      title: titles,
      content: contents
  });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }};


  async function CommunityTestListPut (id, titles, contents) {
    try {
      const response = await Instance.post(`/api/communitytest/${id}`,{
        title: titles,
        content: contents
    });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }};


const TestMethod = {
  TestList,
  CommunityTestListGet,
  CommunityTestListPost,
  CommunityTestListPut
}

export default TestMethod;