import React from "react";
import Header from '../Header/header'
import Sidebar from '../Sidebar/sidebar'
import ClosetList from './ClosetList/closetList'
import './CSSClosetMain.css'

function ClosetMain() {
  return (
    <div>
      <Header />
      <div className="closet-body">
        <div className="flex"><Sidebar /></div>
        <div className="flex"><ClosetList /></div>
      </div>
    </div>

  );
}

export default ClosetMain;
