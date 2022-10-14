import React, { useState } from 'react';
import ClothList from './ClosetList/closetList';
import Header from './header/header';
import Sidebar from "./sidebar/sidebar";
import Plus from './Clothes_Plus/Plus';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Ggo from './Community/Ggol';



function App() {
  return (
    <>
    {/* <div>
      <Header/>
      <Sidebar/>
      <ClothList/>
      <Comm/>
    </div>
    <Router>
            <div>
               <Switch>
               <Route exact path="/" component={Ggo}></Route>
               </Switch>
            </div>
    </Router> */}
     <div>
      <Plus />
     </div>
    </>

  );
}

export default App;
