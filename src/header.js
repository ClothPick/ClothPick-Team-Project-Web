import logo from './img/PICK.PNG'
import './header.css';
import menubar from './img/Vector.png'
import human from './img/human.png'
import alarm from './img/Alarm.png'


function header(){
    return(
        <div className='header'>
        <img src={menubar} id="menubar"></img>
        <img src={logo} alt="logo" id="logo"></img>
        <img src={alarm} alt="logo" id="alarm"></img>
        <img src={human} alt="logo" id="human"></img>
        <hr></hr>

    </div>
    );
}
export default header;
