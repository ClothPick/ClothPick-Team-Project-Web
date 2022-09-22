import React, { useState } from 'react';
import ClothList from './ClosetList/closetList';
import Header from './header/header';
import Sidebar from "./sidebar/sidebar";
import comm1 from "./"
import Comm from './Comm';
import Community from './Community/Community';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {
  return (
    // <div>
    //   {/* <Header/>
    //   <Sidebar/>
    //   <ClothList/> */}
    //   <Comm/>
    //</div>
    <Router>
            <div>
               <Switch>
               <Route exact path="/" component={Community}></Route>
               </Switch>
            </div>
    </Router>
  );
}

export default App;
