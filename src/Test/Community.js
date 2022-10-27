import React, { useState, useEffect } from "react";
import TestMethod from "./TestMethod";
// import './Table.css'
function Community() {
  const [community, setCommunity] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [click, setClick] = useState(true);

  useEffect(() => {
    const get = TestMethod.CommunityTestListGet()
    const getData = () => {
      get.then(data => {
        setCommunity(data);
      });
    };
    getData();
  }, [click]);

  const ontext = async () => {
    await TestMethod.CommunityTestListPost(title, content)
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
    setTitle("")
    setContent("")
  }
  // console.log(community)
  return (
    <div>
      <h1>안녕</h1>
      <div>
        <p>제목</p>
        <input type='text' className="title" value={title} onChange={({ target: { value } }) => setTitle(value)} />
        <p>내용</p>
        <input type='text' className="title" value={content} onChange={({ target: { value } }) => setContent(value)} />
        <button onClick={(e) => ontext()}>작성</button>
      </div>
      <table className="tb">
        <tbody>
          <tr className="title">
            <td>작성글 id</td>
            <td>제목</td>
            <td>내용</td>
          </tr>
          {
            community && community.map((data) => (
              <tr className="content" key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.content}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Community;