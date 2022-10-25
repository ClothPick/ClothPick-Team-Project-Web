import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ClosetMain from "./Closet/ClosetMain";
import ClosetMain from "./Closet/closetMain/Main"
// import AddCloth from "./Closet/AddCloth/Plus"
import AddCloth from "./Closet/closetSidebar/closetAddCloth/AddCloth"
// import ModifyCloth from "./Closet/ClothesModify/Modify_main"
import ModifyCloth from "./Closet/closetMain/clothModify/ModifyMain"

import Recommend from './Community/Pick/NoticeBoard/ClothRecommend';
import UsedTrade from './Community/Pick/NoticeBoard/UsedTrade'
import Freedom from './Community/Pick/NoticeBoard/Freedom'

import DetailPage from "./Community/Pick/DetailPage";
import Write from './Community/Pick/Writing';
import CommunityMain from "./Community/Main/Ggol"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* ------------ 옷장 ------------ */}
          <Route path="/closet" component={ClosetMain} /> {/* 옷장 메인 페이지 */}
          <Route path="/addcloth" component={AddCloth} /> {/* 옷 추가 페이지 */}
          <Route path="/modifycloth" component={ModifyCloth} /> {/* 옷 변경 페이지 */}

          {/* ------------ 픽뮤니티 게시판 ------------ */}
          <Route exact path="/" component={CommunityMain} /> {/* 게시판 메인 페이지 */}
          <Route path="/communitymain" component={CommunityMain} /> {/* 게시판 메인 페이지 */}
          <Route path="/recommend" component={Recommend} /> {/* 옷 추천 게시판 */}
          <Route path="/usedtrade" component={UsedTrade} /> {/* 중고거래 게시판 */}
          <Route path="/freedom" component={Freedom} /> {/* 자유게시판 */}
          <Route path="/detailpage/:boardId" component={DetailPage} /> {/* 게시물 상세 페이지 */}
          <Route path="/write" component={Write} /> {/* 글쓰기 페이지 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;