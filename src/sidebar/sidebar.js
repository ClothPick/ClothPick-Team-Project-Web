import './sidebar.css'
import Arrow from '../img/arrow.png'

function sidebar(){
    return(
        <div className='sidebar'>
            <h4>내 옷장</h4>
            <hr></hr>
            <p></p>
            <span>옷 추가하기 </span>
            <img src={Arrow} id='arrow' alt='arrow'></img>
            <p></p>
            <span>코디 추천 </span>
            <img src={Arrow} id='arrow' alt='arrow'></img>
        </div>
    )

}

export default sidebar;
