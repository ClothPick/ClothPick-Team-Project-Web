import MPside from "../Sidebar/MPside";
import MyPage from "./MyPage";
import Header from "../../common/header/closetHeader/Header";
// import Footer from "../../Common/Footer/Footer";
function MyPageMain(){

    return(
        <div className="mpmain">
            <Header/>
            <MPside />
            <MyPage />
            {/* <Footer/> */}
        </div>
    )
}
export default MyPageMain;