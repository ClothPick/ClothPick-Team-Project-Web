import logo from '../img/PICK.PNG'
import './Footer.css'
import facebook from '../img/sns-1.png'
import youtube from '../img/sns-2.png'
import insta from '../img/sns-3.png'

function Footer() {

    return (
        <div className='wonfooter'>
            <div className="footertotal">
                <div className="footerlogo">
                    <img src={logo} alt="logo" id="ftlogo"></img>
                </div>
                <div className='footertitle'>
                    <span id='wonfooterti'>
                        Cloth Pick
                    </span>
                </div>
            </div>
            <div className='footercontent'>
                <div className='footercont'>
                    <span id='woncompanyname'>
                        옷픽
                    </span><br></br><br></br>
                    <span id='companyaddress'>
                        2022, Cloth Pick : Clothing Recommendation Web<br></br>
                        <span></span>clothpickmoble@gmail.com</span>
                </div>
                <div className='footersns'>
                    <button id='sns1'><img src={facebook} alt="sns" id='face1'></img></button>
                    <button id='sns1'><img src={youtube} alt="sns" id='face1'></img></button>
                    <button id='sns1'><img src={insta} alt="sns" id='face1'></img></button>

                </div>
            </div>

        </div>
    )
}
export default Footer;
