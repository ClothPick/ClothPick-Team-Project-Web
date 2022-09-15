import React from "react";
import "./Closet.css"
import ClosetFilter from "./ClosetFilter";
import "./Accordion/Accordion.css";

function ClosetMain() {
  return (
    <div className="ClosetMain">
      <div className="header">헤더입니다.</div>
      <ClosetFilter />
    </div>

  );
}

export default ClosetMain;
