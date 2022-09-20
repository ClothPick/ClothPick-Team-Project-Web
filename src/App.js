import React, { useState } from 'react';
import ClothList from './ClosetList/closetList';
import Header from './header/header';
import Sidebar from "./sidebar/sidebar";
import Community_header from './community_header/community_header';
import Comm from './Comm';

function App() {
  return (
    <div>
      {/* <Header/>
      <Sidebar/>
      <ClothList/> */}
      <Community_header/>
      <Comm/>
    </div>
  );
}

export default App;
