import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClosetMain from "./Closet/ClosetMain";
import Community from './Community/Pick/NoticeBoard/ClothRecommend';
import Commu from './Test/Community'
import DetailPage from "./Community/Pick/DetailPage";
import Write from './Community/Pick/Writing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/closet" component={ClosetMain} />
          <Route exact path="/" component={Community} />
          <Route path="/test" component={Commu} />
          <Route path="/detailpage" component={DetailPage} />
          <Route path="/write" component={Write} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;