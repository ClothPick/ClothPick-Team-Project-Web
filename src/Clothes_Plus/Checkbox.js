import styled from "styled-components";


const Checkbox=(props)=>{
    return(
        <Styletotal>
        <StyledLabel>
            <StyledInput type="checkbox" id='white' name='white' color='white'/>
            <StyledP>흰색</StyledP>
            <Styled type="checkbox" id='black' name='black' color='black'/>
            <StyledP>검정</StyledP>
            <StyledInput type="checkbox" id='red' name='red' color='red'/>
            <StyledP>빨강</StyledP>
            <StyledInput type="checkbox" id='orange' name='orange' color='orange'/>
            <StyledP>주황</StyledP>
            <StyledInput type="checkbox" id='yellow' name='yellow' color='yellow'/>
            <StyledP>노랑</StyledP>
            <StyledInput type="checkbox" id='green' name='green' color='green'/>
            <StyledP>초록</StyledP>
        </StyledLabel>
        <StyledLabel>
            <Styled type="checkbox" id='blue' name='blue' color='blue'/>
            <StyledP>파랑</StyledP>
            <Styled type="checkbox" id='purple' name='purple' color='purple'/>
            <StyledP>보라</StyledP>
            <StyledInput type="checkbox" id='pink' name='pink' color='pink'/>
            <StyledP>분홍</StyledP>
            <StyledInput type="checkbox" id='beige' name='beige' color='Beige'/>
            <StyledP>베이지</StyledP>
            <Styled type="checkbox" id='brown' name='brown' color='brown'/>
            <StyledP>갈색</StyledP>
            <Styled type="checkbox" id='gray' name='gray' color='gray'/>
            <StyledP>회색</StyledP>
        </StyledLabel>
        </Styletotal>
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

`;

const Styletotal=styled.div`
    width:900px;
    margin-left:150px;
`;