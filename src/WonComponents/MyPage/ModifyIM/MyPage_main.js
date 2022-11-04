import MPside from "../../Common/Sidebar/MPside";
import MyPage from "./MyPage";
// import Header from "../../Common/Header/Header";
import MainHeader from "../../../Header/MainHeader/MainHeader"
import Footer from "../../Common/Footer/Footer";
import Header2 from "../../../Header/communityHeader/Header2" //비로그인 커뮤니티 헤더
import Header3 from "../../../Header/communityHeader/Header"

function MyPageMain(){

    return(
        <div className="mpmain">
            {/* <Header/> */}
            {/* {<MainHeader />} */}
            {<Header2/>}
            <MPside />
            <MyPage />
            <Footer/>
        </div>
    )
}
export default MyPageMain;