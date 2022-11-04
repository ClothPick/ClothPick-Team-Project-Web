import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './pages/pageSample/SamplePage';
import Login from './pages/login/Login';
import Register from './pages/login/Register';

import CommunityMain from './components/Community/communityMain/Main';
import Recommend from './components/Community/Pick/noticeBoardType/1-ClothRecommendNoticeBoard/ClothRecommend';
import Freedom from './components/Community/Pick/noticeBoardType/2-freedomNoticeBoard/Freedom';
import UsedTrade from './components/Community/Pick/noticeBoardType/3-usedTradeNoticeBoard/UsedTrade';

import Write from './components/Community/Pick/noticeBoardComponent/Writing';
import DetailPage from './components/Community/Pick/noticeBoardComponent/DetailPage';
import UpdatePage from './components/Community/Pick/noticeBoardComponent/UpdatePage';

import test from './components/main/toolkit/Profile'

import MyPage from './components/MyPage/ModifyIM/MyPage_main';
import Scrap from './components/MyPage/Scrap/Scrap_main';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Sample} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />

          <Route path='/test' component={test} />

          <Route path="/communitymain" component={CommunityMain} /> {/* 게시판 메인 페이지 */}
          <Route path="/recommend" component={Recommend} /> {/* 옷 추천 게시판 */}
          <Route path="/freedom" component={Freedom} /> {/* 자유게시판 */}
          <Route path="/usedtrade" component={UsedTrade} /> {/* 중고거래 게시판 */}
          <Route path="/detailpage/:boardType/:boardId" component={DetailPage} /> {/* 게시물 상세 페이지 */}
          <Route path="/updatepage/:boardType/:boardId" component={UpdatePage} /> {/* 게시물 수정 페이지 */}
          <Route path="/write" component={Write} /> {/* 글쓰기 페이지 */}


          <Route path="/mypage" component={MyPage} /> {/* 마이페이지 페이지 */}
          <Route path="/scrap" component={Scrap} /> {/* 글쓰기 페이지 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
