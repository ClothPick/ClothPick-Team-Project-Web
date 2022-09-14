import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import { CgArrowsShrinkV } from 'react-icons/cg';
import { CgArrowsMergeAltV } from 'react-icons/cg';

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


function CustomToggle({ children, eventKey }) {

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  const [textColor, setTextColor] = useState('black')
  const [textBorderColor, setTextBorderColor] = useState('black')
  const [isBlack, setIsBlack] = useState(true);
  const [contents, setContents] = useState('필터 닫기')

  const changeContents = () => {
    setContents(prev => prev === '필터 닫기' ? '필터 열기' : '필터 닫기')
  }

  const handleChangeColor = (e) => {
    setIsBlack(!isBlack);
    setTextBorderColor(isBlack ? 'red' : 'black')
    setTextColor(isBlack ? 'red' : 'black');

  }

  return (
    <Button
      type="button"
      value={isBlack}
      style={{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: textBorderColor
      }}
      onClick={() => {
        decoratedOnClick()
        handleChangeColor();
        changeContents();
      }
    }
    >
      <span style={{color:textColor}}>{contents}<CgArrowsMergeAltV/></span>

      {children}
    </Button>
  );
}

function ClosetFilter() {
  return (
    <>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
        <CustomToggle eventKey="0"></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

    </>
  );
}

export default ClosetFilter;
