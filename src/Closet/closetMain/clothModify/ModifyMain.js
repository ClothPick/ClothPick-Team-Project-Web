import React from "react";
import './ModifyMain.css';
import ModifyPicture from "../clothModify/picture/ModifyPicture"
import Modify_choice from "../clothModify/type-pattern-texture-style/ModifyChoice"
import Side from "../../closetSidebar/Sidebar"
import Header from "../../../Header/communityHeader/Header"

function Modify_main() {

    return (
        <div className="mentire">
            <Header />
            <Side />
            <div className="mtotal">
                <div className="mtitle">
                    <p>옷 정보 수정</p>
                </div>
                <hr></hr>
                <div className="mpicture">
                    <ModifyPicture />
                </div>
                <div className="mchoice">
                    <Modify_choice />
                </div>

            </div>
        </div>
    )
}
export default Modify_main;