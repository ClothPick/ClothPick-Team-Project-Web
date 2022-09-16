import React, { useState } from 'react'
import CSSColorCheck from './styles/CSSColorCheck'

function ColorCheck() {
  const [isChecked, setIsChecked] = useState(false);

  const onClickCheck = () => {
    // setIsChecked(isChecked ? !isChecked : isChecked);
    setIsChecked(!isChecked);
    console.log(!isChecked);
  };

  return (
    <div>
      <label value='check1'>
        <CSSColorCheck
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span style={{ marginLeft: 8 }}>흰색</span>
      </label>

      <label value='check2'>
        <CSSColorCheck
          black
          checked={isChecked}
          onChange={() => {
            onClickCheck()
          }}
        />
        <span style={{ marginLeft: 8 }}>검정</span>
      </label>
    </div >
  )
}

export default ColorCheck;