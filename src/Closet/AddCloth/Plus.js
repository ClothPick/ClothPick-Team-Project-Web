import logo from '../../img/PICK.PNG'
import './Plus.css'
import Survey from './Survey'

function Plus() {
    return (
        <div className="total">
            <div className="logo1">
                <img src={logo} alt="logo" id='plusLogo'></img>
            </div>
            <div className="total_list">
                {/* <Picture /> */}
                <Survey />




            </div>
        </div>
    )

}
export default Plus;