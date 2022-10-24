import React from "react";
import './Modify_main.css';
import cloth1 from '../../img/cloth1.png';
import ModifyPicture from "./ModifyPicture";
import Modify_choice from "./Modify_choice";
import Side from "../../Sidebar/sidebar";
import Header from "../../Header/header"

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