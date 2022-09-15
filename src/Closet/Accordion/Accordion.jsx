import React, { useState } from "react";
import data from './data'

const Accordion = () => {
    const [cardOnOff, setCardOnOff] = useState(data);
    const showList = data;

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
                        필터 닫기
                    </button>
                    {/* <span className="question-mark">Q.</span> */}
                    {/* <span>{item.question}</span> */}
                </div>
                <div
                    className={
                        data[index].show
                            ? "faq-card-answer"
                            : "faq-card-answer faq-card-none"
                    }
                >
                    <span className="FAQ-card-answer">{item.answer}</span>
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