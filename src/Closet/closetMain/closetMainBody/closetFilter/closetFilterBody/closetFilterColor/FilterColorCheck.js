import React, { useState } from 'react'
import CSSColorCheck from './FilterColorStyle'
import "../../../../../../Community/Pick/noticeBoardType/NoticeBoard.css"

const ColorCheck = () => {
    const [white, setWhite] = useState(false);
    const [black, setBlack] = useState(false);
    const [red, setRed] = useState(false);
    const [orange, setOrange] = useState(false);
    const [yellow, setYellow] = useState(false);
    const [green, setGreen] = useState(false);
    const [blue, setBlue] = useState(false);
    const [purple, setPurple] = useState(false);
    const [pink, setPink] = useState(false);
    const [beige, setBeige] = useState(false);
    const [brown, setBrown] = useState(false);
    const [gray, setGray] = useState(false);

    const onClickCheck = (color) => {
        switch (color) {
            case "white":
                setWhite(!white);
                console.log('흰색')
                break;

            case "black":
                setBlack(!black)
                console.log('검정')
                break;

            case "red":
                setRed(!red)
                console.log('빨강')
                break;

            case "orange":
                setOrange(!orange)
                console.log('주황')
                break;

            case "yellow":
                setYellow(!yellow)
                console.log('노랑')
                break;

            case "green":
                setGreen(!green)
                console.log('초록')
                break;

            case "blue":
                setBlue(!blue)
                console.log('파랑')
                break;

            case "purple":
                setPurple(!purple)
                console.log('보라')
                break;

            case "pink":
                setPink(!pink)
                console.log('분홍')
                break;

            case "beige":
                setBeige(!beige)
                console.log('베이지')
                break;

            case "brown":
                setBrown(!brown)
                console.log('갈색')
                break;

            case "gray":
                setGray(!gray)
                console.log('회색')
                break;

            default:
                document.write("잘못된 단어 입력");
        }
    };

    return (
        <div>
            <div>
                <label className='m-l-20'>
                    <CSSColorCheck
                        checked={white}
                        onChange={() => {
                            onClickCheck('white')
                        }}
                    />
                    <span name='white' text='white' style={{ marginLeft: 8 }}>흰색</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        black
                        checked={black}
                        onChange={() => {
                            onClickCheck('black')
                        }}
                    />
                    <span name='black' text='black' style={{ marginLeft: 8 }}>검정</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        red
                        checked={red}
                        onChange={() => {
                            onClickCheck('red')
                        }}
                    />
                    <span name='red' text='red' style={{ marginLeft: 8 }}>빨강</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        orange
                        checked={orange}
                        onChange={() => {
                            onClickCheck('orange')
                        }}
                    />
                    <span name='orange' text='orange' style={{ marginLeft: 8 }}>주황</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        yellow
                        checked={yellow}
                        onChange={() => {
                            onClickCheck('yellow')
                        }}
                    />
                    <span name='yellow' text='yellow' style={{ marginLeft: 8 }}>노랑</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        green
                        checked={green}
                        onChange={() => {
                            onClickCheck('green')
                        }}
                    />
                    <span name='green' text='green' style={{ marginLeft: 8 }}>초록</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        blue
                        checked={blue}
                        onChange={() => {
                            onClickCheck('blue')
                        }}
                    />
                    <span name='blue' text='blue' style={{ marginLeft: 8 }}>파랑</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        purple
                        checked={purple}
                        onChange={() => {
                            onClickCheck('purple')
                        }}
                    />
                    <span name='purple' text='purple' style={{ marginLeft: 8 }}>보라</span>
                </label>

            </div>

            <div className='m-t-20'>
                <label className='m-l-20'>
                    <CSSColorCheck
                        pink
                        checked={pink}
                        onChange={() => {
                            onClickCheck('pink')
                        }}
                    />
                    <span name='pink' text='pink' style={{ marginLeft: 8 }}>분홍</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        brown
                        checked={brown}
                        onChange={() => {
                            onClickCheck('brown')
                        }}
                    />
                    <span name='brown' text='brown' style={{ marginLeft: 8 }}>갈색</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        gray
                        checked={gray}
                        onChange={() => {
                            onClickCheck('gray')
                        }}
                    />
                    <span name='gray' text='gray' style={{ marginLeft: 8 }}>회색</span>
                </label>

                <label className='m-l-20'>
                    <CSSColorCheck
                        beige
                        checked={beige}
                        onChange={() => {
                            onClickCheck('beige')
                        }}
                    />
                    <span name='beige' text='beige' style={{ marginLeft: 8 }}>베이지</span>
                </label>
            </div>
        </div>
    )
}

export default ColorCheck;