import React from "react";
import ClothList from './closetList';
import Header from './header';
import Sidebar from "./sidebar";

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <ClothList/>

    </div>
  );
}

export default App;
