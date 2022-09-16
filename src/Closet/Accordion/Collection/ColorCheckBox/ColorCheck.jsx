import React, { useState } from 'react'
import CSSColorCheck from './CSSColorCheck'

const ColorCheck = () => {
  const isChecked = useState(false);
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
        break;

      case "black":
        setBlack(!black)
        break;

      case "red":
        setRed(!red)
        break;

      case "orange":
        setOrange(!orange)
        break;

      case "yellow":
        setYellow(!yellow)
        break;

      case "green":
        setGreen(!green)
        break;

      case "blue":
        setBlue(!blue)
        break;

      case "purple":
        setPurple(!purple)
        break;

      case "pink":
        setPink(!pink)
        break;

      case "beige":
        setBeige(!beige)
        break;

      case "brown":
        setBrown(!brown)
        break;

      case "gray":
        setGray(!gray)
        break;

      default:
        document.write("잘못된 단어 입력");
    }
    console.log(!isChecked);
  };

  return (
    <>
      <label>
        <CSSColorCheck
          checked={white}
          onChange={() => {
            onClickCheck('white')
          }}
        />
        <span name='white' text='white' style={{ marginLeft: 8 }}>흰색</span>
      </label>

      <label>
        <CSSColorCheck
          black
          checked={black}
          onChange={() => {
            onClickCheck('black')
          }}
        />
        <span name='black' text='black' style={{ marginLeft: 8 }}>검정</span>
      </label>

      <label>
        <CSSColorCheck
          red
          checked={red}
          onChange={() => {
            onClickCheck('red')
          }}
        />
        <span name='red' text='red' style={{ marginLeft: 8 }}>빨강</span>
      </label>

      <label>
        <CSSColorCheck
          orange
          checked={orange}
          onChange={() => {
            onClickCheck('orange')
          }}
        />
        <span name='orange' text='orange' style={{ marginLeft: 8 }}>주황</span>
      </label>

      <label>
        <CSSColorCheck
          yellow
          checked={yellow}
          onChange={() => {
            onClickCheck('yellow')
          }}
        />
        <span name='yellow' text='yellow' style={{ marginLeft: 8 }}>노랑</span>
      </label>

      <label>
        <CSSColorCheck
          green
          checked={green}
          onChange={() => {
            onClickCheck('green')
          }}
        />
        <span name='green' text='green' style={{ marginLeft: 8 }}>초록</span>
      </label>
      <p></p>
      <label>
        <CSSColorCheck
          blue
          checked={blue}
          onChange={() => {
            onClickCheck('blue')
          }}
        />
        <span name='blue' text='blue' style={{ marginLeft: 8 }}>파랑</span>
      </label>

      <label>
        <CSSColorCheck
          purple
          checked={purple}
          onChange={() => {
            onClickCheck('purple')
          }}
        />
        <span name='purple' text='purple' style={{ marginLeft: 8 }}>보라</span>
      </label>

      <label>
        <CSSColorCheck
          pink
          checked={pink}
          onChange={() => {
            onClickCheck('pink')
          }}
        />
        <span name='pink' text='pink' style={{ marginLeft: 8 }}>분홍</span>
      </label>

      <label>
        <CSSColorCheck
          beige
          checked={beige}
          onChange={() => {
            onClickCheck('beige')
          }}
        />
        <span name='beige' text='beige' style={{ marginLeft: 8 }}>베이지</span>
      </label>

      <label>
        <CSSColorCheck
          brown
          checked={brown}
          onChange={() => {
            onClickCheck('brown')
          }}
        />
        <span name='brown' text='brown' style={{ marginLeft: 8 }}>갈색</span>
      </label>

      <label>
        <CSSColorCheck
          gray
          checked={gray}
          onChange={() => {
            onClickCheck('gray')
          }}
        />
        <span name='gray' text='gray' style={{ marginLeft: 8 }}>회색</span>
      </label>
    </>
  )
}

export default ColorCheck;