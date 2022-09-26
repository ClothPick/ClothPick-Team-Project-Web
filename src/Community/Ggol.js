
import Pick from './Pick';
import Transaction from './Transaction';
import Cfree from './Back';
import Community_header from '../Community_header/Community_header';
import './Ggol.css'

function Ggol(){
    return(
        <div>
            <Community_header />
            <div className='body'>
            <div className='list'>
                <div className='search'>
                    <input type="text" id='search' />
                </div>
                <div className='board'>
                    <Pick />
                    <Transaction />
                    <Cfree />
                </div>
                </div>
                </div>

        </div>
    )

}
export default Ggol;