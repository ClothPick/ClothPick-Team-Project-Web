import MPside from "../Sidebar/MPside";
import Header from "../../common/header/closetHeader/Header";
import Scrap from "./Scrap";

// import Footer from "../../Common/Footer/Footer"

function Scrap_main(){

    return (
        <div className="scrap_total">
            <Header />
            <MPside/>
            <Scrap />
            {/* <Footer/> */}
        </div>
    )
}

export default Scrap_main;