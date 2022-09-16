import React from 'react'
import styled, { css } from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

`
const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.black ? 'white' : 'black'};;
  stroke-width: 3px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  /* background: ${props => props.background || 'white'} */
  border-radius: 3px;
  transition: all 150ms;
  /* background-color: white; */
  background-color: ${props => props.background || 'white'};
  box-shadow: 0 0 0 1px black;


  ${(props) =>
    props.black &&
    css`
      background-color: black;
      label = '검정'
    `
  }

  ${HiddenCheckbox}: focus + & {
  box- shadow: 0 0 0 3px red;

  }

  ${Icon} {
  visibility: ${props => (props.checked ? 'visible' : 'hidden')}
}
`;

const CSSColorCheck = ({ className, checked, ...props }) => (

  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24" {...props}>
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default CSSColorCheck;

