import React from "react";
import './ModifyMain.css';
import ModifyPicture from "../clothModify/picture/ModifyPicture"
import Modify_choice from "../clothModify/type-pattern-texture-style/ModifyChoice"
import Side from "../../closetSidebar/Sidebar"
import Header from "../../../Header/closetHeader/Header"
import Footer from "../../../Footer/Footer";

function Modify_main() {

    return (
        <div className="mentire">
            <Header />
            <Side />
            <div className="mtotal">
                <div className="mtitle">
                    <p>옷 정보 조회 및 삭제</p>
                </div>
                <hr></hr>
                <div className="mpicture">
                    <h6 className="m-l-150">* 키워드를 수정할 수 있습니다.</h6>
                    <ModifyPicture />
                </div>
                <div className="mchoice">
                    <Modify_choice />
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Modify_main;