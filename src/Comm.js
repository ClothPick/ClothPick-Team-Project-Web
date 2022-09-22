import './comm.css';
import React from 'react';
import Community from './Community/Community';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function Comm(){
    return(
        <Router>
            <div>
               <Switch>
               <Route exact path="/" component={Community}></Route>
               </Switch>
            </div>
    </Router>
    );
}
export default Comm;