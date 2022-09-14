import logo from './img/PICK.PNG'
import './header.css';
import menubar from './img/Vector.png'
import human from './img/human.png'
import alarm from './img/Alarm.png'


function header(){
    return(
        <div>
        <div className='header'>
        <div class="item"><img src={menubar} id="menubar"></img></div>
        <div class="item"><img src={logo} alt="logo" id="logo"></img></div>

        <div className="end">
            <img src={alarm} alt="logo" id="alarm"></img>
            <img src={human} alt="logo" id="human"></img>
        </div>
        </div>
        <hr></hr>
        </div>
    );
}
export default header;
