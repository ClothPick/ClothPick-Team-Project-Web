import React, { useState } from "react";
import data from './data'
import { BiSearchAlt2 } from 'react-icons/bi';
import TypeRadio from "./Collection/TypeRadioButton/TypeRadio";
import ColorCheck from "./Collection/ColorCheckBox/ColorCheck";
// import Contents from './Collection/TypeRadioButton/Contents'

// [내 옷장] Filter 구성 요소

const Accordion = () => {
    const [cardOnOff, setCardOnOff] = useState(data);
    const showList = data;
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const getQnACard = (item, index) => {
        return (
            <div className="faq-card" key={index}>
                <div
                    className="faq-card-title"
                >
                    <button onClick={() => {
                        let tempCard = cardOnOff;
                        tempCard[index].show = !tempCard[index].show;
                        setCardOnOff([...tempCard]);
                    }}>
                        필터 열기
                    </button>

                    <BiSearchAlt2 />
                    <input type='text' value={search} onChange={onChange} />

                </div>
                <div
                    className={
                        data[index].show
                            ? "faq-card-answer"
                            : "faq-card-answer faq-card-none"
                    }
                >
                    <div>
                        <p className="FAQ-card-answer">{item.type}</p>
                        <TypeRadio />

                        <hr />
                        <p className="FAQ-card-answer">{item.color}</p>
                        <ColorCheck />
                        <hr />
                        <p className="FAQ-card-answer">{item.texture}</p>
                        <hr />
                        <p className="FAQ-card-answer">{item.style}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="fqa-parent">
                <div className="faq-list">
                    {showList.map((item, index) => getQnACard(item, index))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;