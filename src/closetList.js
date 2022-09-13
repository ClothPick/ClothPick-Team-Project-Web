import './closetList.css'
import Arrow from './img/arrow.png'
import cloth1 from './img/cloth1.png'

function sidebar(){
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
}

function closetList(){
    return(
        <div>
            {sidebar()}
            <div className='list'>
                <br></br>
                <table id='table'>
                    <tr>
                        <td><figure>
                            <img src={cloth1} id="c1"></img>
                            <figcaption>기모 긴팔티</figcaption>
                            </figure>
                            <figure>

                                </figure></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default closetList;