import React, { useState } from 'react'
import CSSColorCheck from './styles/CSSColorCheck'

const ColorCheck = ({ props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheck = () => {
    setIsChecked(!isChecked);
    console.log(!isChecked);
  };

  return (
    <>
      <label>
        <CSSColorCheck
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='white' text='white' style={{ marginLeft: 8 }}>흰색</span>
      </label>

      <label>
        <CSSColorCheck
          black
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='black' text='black' style={{ marginLeft: 8 }}>검정</span>
      </label>

      <label>
        <CSSColorCheck
          red
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='red' text='red' style={{ marginLeft: 8 }}>빨강</span>
      </label>

      <label>
        <CSSColorCheck
          orange
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='orange' text='orange' style={{ marginLeft: 8 }}>주황</span>
      </label>

      <label>
        <CSSColorCheck
          yellow
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='yellow' text='yellow' style={{ marginLeft: 8 }}>노랑</span>
      </label>

      <label>
        <CSSColorCheck
          green
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='green' text='green' style={{ marginLeft: 8 }}>초록</span>
      </label>
      <p></p>
      <label>
        <CSSColorCheck
          blue
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='blue' text='blue' style={{ marginLeft: 8 }}>파랑</span>
      </label>

      <label>
        <CSSColorCheck
          purple
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='purple' text='purple' style={{ marginLeft: 8 }}>보라</span>
      </label>

      <label>
        <CSSColorCheck
          pink
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='pink' text='pink' style={{ marginLeft: 8 }}>분홍</span>
      </label>

      <label>
        <CSSColorCheck
          beige
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='beige' text='beige' style={{ marginLeft: 8 }}>베이지</span>
      </label>

      <label>
        <CSSColorCheck
          brown
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='brown' text='brown' style={{ marginLeft: 8 }}>갈색</span>
      </label>

      <label>
        <CSSColorCheck
          gray
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span name='gray' text='gray' style={{ marginLeft: 8 }}>회색</span>
      </label>
    </>
  )
}

export default ColorCheck;