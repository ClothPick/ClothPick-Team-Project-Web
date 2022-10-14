import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClosetMain from "./Closet/ClosetMain";
import Recommend from './Community/Pick/NoticeBoard/ClothRecommend';
import UsedTrade from './Community/Pick/NoticeBoard/UsedTrade'
import Freedom from './Community/Pick/NoticeBoard/Freedom'
import Commu from './Test/Community'
import DetailPage from "./Community/Pick/DetailPage";
import Write from './Community/Pick/Writing';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/closet" component={ClosetMain} />
          <Route exact path="/" component={Recommend} />

          <Route path="/recommend" component={Recommend} />
          <Route path="/usedtrade" component={UsedTrade} />
          <Route path="/freedom" component={Freedom} />
          <Route path="/detailpage/:boardId" component={DetailPage} />
          <Route path="/write" component={Write} />

          <Route path="/test" component={Commu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;