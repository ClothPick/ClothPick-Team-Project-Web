import Pick from './Pick'
import Transaction from './Transaction';
import Free from './Free';
import Community_header from '../community_header/community_header';

function Community(){
    return(
        <div>
        <Community_header />
        <div className='body'>
            <div className="list">
                <div className='search'>
                    <input type="text" id='search' Placeholder="검색하세요."/>
                </div>
                <div className='board'>
                    <Pick />
                    <Transaction />
                    <Free />
                </div>
            </div>
        </div>
        </div>
    )

}
export default Community;