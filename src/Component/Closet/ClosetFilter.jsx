import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { CgArrowsMergeAltV } from 'react-icons/cg';
import Form from 'react-bootstrap/Form';

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


function CustomToggle({ children, eventKey }) {

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('필터 클릭'),
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
      <span style={{ color: textColor }}>{contents}<CgArrowsMergeAltV /></span>

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
            <Card.Body>
              <Form>
                <h6>종류</h6>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="상의"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="아우터"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="하의"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />

                    <Form.Check
                      inline
                      label="신발"
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                    />

                    <Form.Check
                      inline
                      label="가방"
                      name="group1"
                      type={type}
                      id={`inline-${type}-5`}
                    />

                    <Form.Check
                      inline
                      label="악세사리"
                      name="group1"
                      type={type}
                      id={`inline-${type}-6`}
                    />

                    <Form.Check
                      inline
                      label="기타"
                      name="group1"
                      type={type}
                      id={`inline-${type}-7`}
                    />
                  </div>
                ))}
              </Form>
              <hr />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </>
  );
}

export default ClosetFilter;
