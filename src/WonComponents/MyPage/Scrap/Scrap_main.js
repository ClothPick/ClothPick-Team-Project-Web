import MPside from "../../Common/Sidebar/MPside";
import Header from "../../Common/Header/Header";
import Scrap from "./Scrap";
import Footer from "../../Common/Footer/Footer"

function Scrap_main(){

    return (
        <div className="scrap_total">
            <Header />
            <MPside/>
            <Scrap />
            <Footer/>
        </div>
    )
}

export default Scrap_main;