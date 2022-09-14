import './sidebar.css'
import Arrow from './img/arrow.png'

function sidebar(){
    return(
        <div className='sidebar'>
            <h4>내 옷장</h4>
            <hr></hr>
            <p></p>
            <a>옷 추가하기 </a>
            <img src={Arrow} id='arrow'></img>
            <p></p>
            <a>코디 추천 </a>
            <img src={Arrow} id='arrow'></img>
        </div>
    )

}

export default sidebar;
