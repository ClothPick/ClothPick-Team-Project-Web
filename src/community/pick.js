import './pick.css'
import img from '../img/clothes.png'
import up from '../img/up.png'
function pick(){
    return(
        <div className='pick_total'>
            <div className='pick_head'>
                <img src={img} id='clothes' alt='clothes'></img>
                <p>옷 추천</p>
                <hr id='hr2'></hr>
            </div>

            <div className='pick_list'>
            <table id='pick_list'>
                <tr>
                    <td>.</td>
                </tr>
                <tr>
                    <td>..</td>
                </tr>
                <tr>
                    <td>...</td>
                </tr>
                <tr>
                    <td>....</td>
                </tr>
                <tr>
                    <td>.....</td>
                </tr>
            </table>
            </div>
            <div className='rank'>
                <img src={up} alt="up"></img>
            </div>
        </div>
    )
}
export default pick;