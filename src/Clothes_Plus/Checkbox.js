import { useState } from "react";
import styled from "styled-components";



function Checkbox(props){
    const [checkedList, setCheckedList] = useState([]);
    const onCheckedElement=(checked,id)=>{
        if(checked){
            setCheckedList([...checkedList,id]);
        }else{
            //체크 해제
            setCheckedList(checkedList.filter(el => el !== id));
        }
    };

    var i;
    return(
        <>
        <Styletotal>
            <StyledLabel>
            <StyledInput type="checkbox" id="white" name='white' color='white' onClick={(e)=> { onCheckedElement(e.target.checked, "white");}}
            checked={checkedList.includes("white")? true : false} onChange={props.setColor(checkedList)} />
            <StyledP>흰색</StyledP>
            </StyledLabel>

            <StyledLabel>
            <Styled type="checkbox" id='black' name='black' color='black' onClick={(e)=> { onCheckedElement(e.target.checked, "black"); }}
             checked={checkedList.includes("black")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>검정</StyledP>
            </StyledLabel>

            <StyledLabel>
            <StyledInput type="checkbox" id='red' name='red' color='red' onClick={(e)=>{onCheckedElement(e.target.checked, "red"); }}
            checked={checkedList.includes("red")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>빨강</StyledP>
            </StyledLabel>

            <StyledLabel>
            <StyledInput type="checkbox" id='orange' name='orange' color='orange' onClick={(e)=>{onCheckedElement(e.target.checked, "orange");}}
            checked={checkedList.includes("orange")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>주황</StyledP>
            </StyledLabel>

            <StyledLabel>
            <StyledInput type="checkbox" id='yellow' name='yellow' color='yellow' onClick={(e)=>{onCheckedElement(e.target.checked, "yellow");}}
            checked={checkedList.includes("yellow")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>노랑</StyledP>
            </StyledLabel>

            <StyledLabel>
            <StyledInput type="checkbox" id='green' name='green' color='green' onClick={(e)=>{onCheckedElement(e.target.checked, "green");}}
            checked={checkedList.includes("green")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>초록</StyledP>
            </StyledLabel>
            </Styletotal>

            <Styletotal>
            <StyledLabel>
            <Styled type="checkbox" id='blue' name='blue' color='blue' onClick={(e)=>{onCheckedElement(e.target.checked, "blue");}}
            checked={checkedList.includes("blue")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>파랑</StyledP>
            </StyledLabel>

            <StyledLabel>
            <Styled type="checkbox" id='purple' name='purple' color='purple' onClick={(e)=>{onCheckedElement(e.target.checked, "purple");}}
            checked={checkedList.includes("purple")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>보라</StyledP>
            </StyledLabel>

            <StyledLabel>
            <StyledInput type="checkbox" id='pink' name='pink' color='pink' onClick={(e)=>{onCheckedElement(e.target.checked, "pink");}}
            checked={checkedList.includes("pink")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>분홍</StyledP>
            </StyledLabel>

            <StyledLabel>
            <StyledInput type="checkbox" id='beige' name='beige' color='Beige' onClick={(e)=>{onCheckedElement(e.target.checked, "beige");}}
            checked={checkedList.includes("beige")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>베이지</StyledP>
            </StyledLabel>

            <StyledLabel>
            <Styled type="checkbox" id='brown' name='brown' color='brown' onClick={(e)=>{onCheckedElement(e.target.checked, "brown");}}
            checked={checkedList.includes("brown")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>갈색</StyledP>
            </StyledLabel>

            <StyledLabel>
            <Styled type="checkbox" id='gray' name='gray' color='gray' onClick={(e)=>{onCheckedElement(e.target.checked, "gray");}}
            checked={checkedList.includes("gray")? true : false} onChange={props.setColor(checkedList)}/>
            <StyledP>회색</StyledP>
            </StyledLabel>
        </Styletotal>
        </>
    );
}
export default Checkbox;

const StyledInput=styled.input`
    appearance:none;
    width:2.0rem;
    height:2.0rem;
    border:1.5px solid gainsboro;
    border-radius:0.35rem;
    background-color:${props => props.color};


    &:checked{
        border-color:transparent;
        background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size:100% 100%;
        background-position:50%;
        border:1.5px solid gainsboro;
        background-repeat:no-repeat;
    }
`;

const Styled=styled.input`
appearance:none;
width:2.0rem;
height:2.0rem;
border:1.5px solid gainsboro;
border-radius:0.35rem;
background-color:${props => props.color};

&:checked{
    border-color:transparent;
    background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size:100% 100%;
    background-position:50%;
    border:1.5px solid gainsboro;
    background-repeat:no-repeat;
}
`;

const StyledLabel = styled.label`
    display:flex;
    align-items:center;
    user-select:none;
    justify-content: space-around;
    margin-bottom:20px
`;

const StyledP=styled.p`
    margin-left:10px
`;

const Styletotal=styled.div`
    width:900px;
    margin-left:150px;
    display:flex;
    justify-content: space-around;
`;