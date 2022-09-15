import React, { useState } from 'react'
import CSSColorCheck from './styles/CSSColorCheck'

function ColorCheck(props) {
  const [state, setState] = useState(false);

  const handleCheckboxChange = () => {
    setState(!state);
  };

  return (
    <div>
      <label>
        <CSSColorCheck
          checked={state}
          onChange={handleCheckboxChange}
        />
        <span style={{ marginLeft: 8 }}>흰색</span>
      </label>

    </div >
  )
}

export default ColorCheck;