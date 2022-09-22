import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClosetMain from "./Closet/ClosetMain";
import Community from './Community/Comm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ClosetMain} />
          <Route path="/community" component={Community} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;