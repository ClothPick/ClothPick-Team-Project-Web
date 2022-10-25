import logo from "../../../img/PICK.PNG"
import './AddCloth.css'
// import Survey from './AddClothBody'
import Survey from "./step2,5,6,7-body,radio/AddClothBody"

function Plus() {
    return (
        <div className="total">
            <div className="logo1">
                <img src={logo} alt="logo" id='plusLogo'></img>
            </div>
            <div className="total_list">
                <Survey />
            </div>
        </div>
    )

}
export default Plus;