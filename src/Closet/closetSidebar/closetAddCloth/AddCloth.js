import Footer from "../../../Footer/Footer";
import logo from "../../../img/PICK.PNG"
import './AddCloth.css'
import Survey from "./step1,5,6,7-body,radio/AddClothBody"

function Plus() {
    return (
        <div className="total">
            <div className="logo1">
                <img src={logo} alt="logo" id='plusLogo'></img>
            </div>
            <div className="total_list">
                <Survey />
            </div>
            <Footer />
        </div>
    )

}
export default Plus;