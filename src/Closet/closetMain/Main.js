import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/closetHeader/Header"
// import Sidebar from '../Sidebar/sidebar'
import Sidebar from "../closetSidebar/Sidebar";
// import ClosetList from './ClosetList/closetList'
import ClosetList from "./closetMainBody/MainBody"
import './Main.css'

// {ClosetFilter} - [내 옷장] Filter 기능

function ClosetMain() {
    return (
        <div>
            <Header />
            <div className="closet-body">
                <div className="flex"><Sidebar /></div>
                <div className="flex"><ClosetList /></div>
            </div>
            <Footer />

        </div>

    );

}
export default ClosetMain;