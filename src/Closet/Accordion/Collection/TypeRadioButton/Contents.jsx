// import React, { useState } from 'react';
// import styled from 'styled-components';
// import './CSSContents.css'

// const ContentsBlock = styled.div`
//   width: 512px;
//   height: 80px;
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);

//   margin-left: 15px;
//   margin-top: 10px;
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
// `;



// function Contents({ children }) {

//     const [radio, setRadio] = useState([]);

//     const handleClickRadioButton = (e) => {
//         console.log(e.target.value);
//         setRadio(e.target.value);
//     }

//     return (
//         <ContentsBlock>
//             {children}
//             <h5 className='text-detail'>세부사항
//                 <label className='radio-contents'>
//                     <input
//                         type='radio'
//                         value='1'
//                         checked={radio === '1'}
//                         onChange={handleClickRadioButton}
//                     />
//                     민소매
//                 </label>

//                 <label className='radio-contents'>
//                     <input
//                         type='radio'
//                         value='2'
//                         checked={radio === '2'}
//                         onChange={handleClickRadioButton}
//                     />
//                     반팔
//                 </label>

//                 <label className='radio-contents'>
//                     <input
//                         type='radio'
//                         value='3'
//                         checked={radio === '3'}
//                         onChange={handleClickRadioButton}
//                     />
//                     5부 반팔
//                 </label>

//                 <label className='radio-contents'>
//                     <input
//                         type='radio'
//                         value='4'
//                         checked={radio === '4'}
//                         onChange={handleClickRadioButton}
//                     />
//                     긴팔
//                 </label>

//                 <label className='radio-contents'>
//                     <input
//                         type='radio'
//                         value='5'
//                         checked={radio === '5'}
//                         onChange={handleClickRadioButton}
//                     />
//                     기타
//                 </label>
//             </h5>

//         </ContentsBlock>
//     );
// }

// export default Contents;