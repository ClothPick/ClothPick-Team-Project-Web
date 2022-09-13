import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClosetMain from "./Component/Closet/ClosetMain";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ClosetMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
