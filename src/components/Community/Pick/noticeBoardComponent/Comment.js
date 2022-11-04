import React from "react";
import { useState, useEffect  } from "react";
import "../noticeBoardType/NoticeBoard.css"
// import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'
import { BsPencilFill }from 'react-icons/bs'
import TestMethod from "../../../../apis/Test/TestMethod";
import UserMethod from "../../../../apis/Test/UserMethod";
import BoardUser from "../../../../apis/Test/BoardUserMethod";
function Comment( props ) {
    const history = useHistory();
    const [commentcontent, setCommentContnet] = useState('')
    const [commentcontentlayer2, setCommentContnetLayer2] = useState('')
    const [putcheck , setPutCheck] = useState(false)
    const [putcommentcontent, setPutCommentConent] = useState('');
    const [putcommentId, setPutCommentId] = useState('');

    const [showButton, setShowButton] = useState(false); // 삭제 버튼
    const [penbutton, setPenButton] = useState(false);
    const [users, setUsers] = useState([]) // 댓글 추가 배열

    const [set, setSet] = useState(true); //고정값
    const [commentlistlayer1, setCommentListLayer1] = useState([]);
    const [commentlistlayer2, setCommentListLayer2] = useState([]);

    const [layer2post, setLayer2Post]= useState(false);
    const [layer2post_commentId, setLayer2Post_CommentId]= useState('');

    const [userId, setUserId] = useState();
    const bot = document.getElementById('bot');
    const mid = document.getElementById('mid');
    useEffect(() => {
        setCommentListLayer1([]);
        setCommentListLayer2([]);
        const get = TestMethod.Commentlist(props.url)
        const getData= () => {
            get.then(data => {
                for(let i = 0; i<data.length; i++){
                    if(data[i].commentLayer == 1){
                        setCommentListLayer1(commentlistlayer1 => [...commentlistlayer1, data[i]]);
                        console.log(data[i]);
                    }else{
                        setCommentListLayer2(commentlistlayer2 => [...commentlistlayer2, data[i]]);
                        console.log(data[i]);
                    }
                }


            });
        }
        const userget = UserMethod.ReturnUserInfo();
        const usergetData = () => {
            userget.then(data => {

                setUserId(data.userId);
                // console.log("dadad : " + data.userId)
            });
        }
        getData();
        usergetData();

    },[set])

    //답글 클릭시 답글 입력창 open 한번 클릳하면 close
    const onlayer2postOPEN = (commentId,) => {
        if(layer2post){
            setLayer2Post(false);
            setLayer2Post_CommentId('');
        }else{
            setLayer2Post(true);
            setLayer2Post_CommentId(commentId);
        }
    }
    //수정창 오픈
    const putOpen = (commentcontent, commentId) => {
        setPutCheck(!putcheck);
        setPutCommentConent(commentcontent);
        setPutCommentId(commentId);
        setSet(!set);
        window.scrollTo({top:mid.offsetTop , behavior:'smooth'});
    }
    //댓글 수정
    const putcomment = async(commentId) => {
        if(putcommentcontent === ''){
            alert('내용을 입력하세용');
        }else{
            const respone = await BoardUser.BoardCommentPut(commentId, putcommentcontent);
            // console.log(respone);
            setSet(!set);
            props.setClick(!props.click);
            setPutCheck(false);
            // setCommentContnet('');
            // window.scrollTo({top:bot.offsetTop , behavior:'smooth'});
        }
    }
    //댓글 post
    const commentlayer1Post = async() => {
        if(commentcontent === ''){
            alert('내용을 입력하세용');
        }else if(userId == undefined){
            alert('회원 기능 입니다. 로그인해 주세요')
            history.push('/login');
        }
        else{
            const respone = await BoardUser.BoardLayer1CommentPost(props.boardId, props.boardType, commentcontent);
            console.log(respone);
            setSet(!set);
            props.setClick(!props.click);
            setCommentContnet('');
            window.scrollTo({top:bot.offsetTop , behavior:'smooth'});
        }
    }
    //대댓글 포스트
    const commentlayer2Post = async(commentId) => {
        if(commentcontentlayer2 === ''){
            alert('내용을 입력하세용');
        }else if(userId == undefined){
            alert('회원 기능 입니다. 로그인해 주세요')
            history.push('/login');
        }

        else{
            const respone = await BoardUser.BoardLayer2CommentPost(props.boardId, props.boardType, commentcontentlayer2, commentId);
            console.log(respone);
            setSet(!set);
            props.setClick(!props.click);
            setCommentContnetLayer2('');
            setLayer2Post(false);
            // window.scrollTo({top:inner.offsetTop , behavior:'smooth'});
        }
    }
    //댓글 삭제
    const commentDel = async(commentId) => {
        if (window.confirm("삭제하시겠습니까?")) {
            console.log(commentId)
            const respone = await BoardUser.BoardCommentDelete(commentId);
            setSet(!set);
        }else{

        }

    }
    return (
        <div className="comment_component">
            <div id='mid'></div>
                {
                            putcheck ?
                            <div className='commentpostbox'>
                             <div className="flex">
                                 <input
                                     className="box-comment"
                                     name="comment"
                                     onChange={({target: {value}}) => setPutCommentConent(value)}
                                     value={putcommentcontent}
                                     maxLength='64'
                                 />
                                 <button className='brown-round scrap' onClick={() => putcomment(putcommentId)}>수정</button>
                                 <div id="middle"></div>
                                </div>
                            </div> :
                            <div className='commentpostbox'>
                                <div className="flex">
                                    <input
                                        className="box-comment"
                                        name="comment"
                                        onChange={({target: {value}}) => setCommentContnet(value)}
                                        value={commentcontent}
                                        placeholder="댓글을 입력하세요."
                                        maxLength='64'
                                    />
                                <button className='brown-round scrap' onClick={()=>commentlayer1Post()}>작성</button>
                                </div>
                            </div>

                }
            <div>
                {commentlistlayer1 && commentlistlayer1.map((layer1, index) =>
                    <div key={index} >
                        <div className="comment" onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
                            {
                                layer1.userId == userId ?
                                <div>
                                    <BsPencilFill className="del-button" size='23' onClick={() => putOpen(layer1.commentContent, layer1.commentId)} />
                                    <FaTrashAlt className="del-button" size='23' onClick={() => commentDel(layer1.commentId)}/>
                                </div>
                                 : <></>
                            }
                            <div className="comment-text">{layer1.userNickName}</div>

                            <div className="comment-text2">{layer1.commentContent}</div>
                            <div className="comment-time">{layer1.commentCreateAt.split('T')[0]} {layer1.commentCreateAt.split('T')[1]}</div>
                            <button className="comment-btn" onClick={() => onlayer2postOPEN(layer1.commentId)}>답글</button>
                        </div>

                        {
                            layer2post && layer1.commentId === layer2post_commentId ?
                            <div className='commentpostbox'>
                                <div className="flex">
                                    <input
                                        className="box-comment"
                                        name="comment"
                                        onChange={({target: {value}}) => setCommentContnetLayer2(value)}
                                        value={commentcontentlayer2}
                                        placeholder="답글을 입력하세요."
                                        onFocus={layer2post}
                                        maxLength='64'
                                    />
                                    <button className='brown-round scrap' onClick={() => commentlayer2Post(layer1.commentId)}>작성</button>
                                    <div id="middle"></div>
                                </div>
                            </div> : null

                        }
                        {
                            commentlistlayer2 && commentlistlayer2.map((layer2, index) =>
                            layer1.commentId === layer2.commentParentsId ?
                            <div key={index} >
                                <div className="layer2comment" onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
                                {
                                    layer2.userId == userId ?
                                    <div>
                                        <BsPencilFill className="del-button" size='23' onClick={() => putOpen(layer2.commentContent, layer2.commentId)} />
                                        <FaTrashAlt className="del-button" size='23' onClick={() => commentDel(layer1.commentId)}/>
                                    </div>: <></>
                                }
                                    <div className="comment-text">{layer2.userNickName}</div>
                                    <div className="comment-text2">{layer2.commentContent}</div>
                                    <div className="comment-time">{layer2.commentCreateAt.split('T')[0]} {layer2.commentCreateAt.split('T')[1]}</div>
                                    {/* <button className="comment-btn" onClick={() => abc()}>답글</button> */}
                                </div>
                            </div> :  <></>
                            )
                        }
                    </div>
                )}
            </div>
            <div id="bot"></div>
        </div>
    );
}

export default Comment;