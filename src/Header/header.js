import logo from '../img/PICK.PNG'
import './header.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';




function header() {
    return (
        <div>
            <div className='header-bar'></div>
            <div className='header'>
                <AiOutlineMenu size='40' className="menu" />
                <div className="item"><img src={logo} alt="logo" id="logo"></img></div>

                <div className="item">
                    <MdPersonOutline size="35"></MdPersonOutline>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default header;