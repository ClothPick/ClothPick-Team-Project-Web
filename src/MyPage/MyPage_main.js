import MPside from "./MPside";
import MyPage from "./MyPage";
import MainHeader from "../Header/MainHeader/MainHeader";
function MyPageMain(){

    return(
        <div className="mpmain">
            <MainHeader/>
            <MPside />
            <MyPage />
        </div>
    )
}
export default MyPageMain;