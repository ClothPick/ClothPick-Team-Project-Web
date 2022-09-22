import './comm.css';
import React from 'react';
import Pick from './Pick/Pick'

function Comm() {
    return (
        <div className='body'>
            <div className="list">
                <div className='search'>
                    <input type="text" id='search' Placeholder="검색하세요." />
                </div>
                <div className='board'>
                    <Pick />
                </div>
            </div>
            {/* <div className='rank'>

            </div> */}
        </div>
    );
}
export default Comm;