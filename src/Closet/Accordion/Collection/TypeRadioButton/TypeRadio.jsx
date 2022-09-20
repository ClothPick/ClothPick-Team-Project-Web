import React, { useState } from 'react';
import styled from 'styled-components';
import './CSSContents.css'

// Contents 함수에서 사용하는 styles
const ContentsBlock = styled.div`
        width: 700px;
        height: 80px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);

        margin-left: 15px;
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
      `;

// 상의 세부사항
const TopContents = () => {
    const [topRadio, setTopRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setTopRadio(e.target.value);

    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='민소매'
                        checked={topRadio === '민소매'}
                        onChange={handleClickTopRadioButton}
                    />
                    민소매

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='반팔'
                        checked={topRadio === '반팔'}
                        onChange={handleClickTopRadioButton}
                    />
                    반팔
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5부 반팔'
                        checked={topRadio === '5부 반팔'}
                        onChange={handleClickTopRadioButton}
                    />
                    5부 반팔
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='긴팔'
                        checked={topRadio === '긴팔'}
                        onChange={handleClickTopRadioButton}
                    />
                    긴팔
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='기타'
                        checked={topRadio === '상의 기타'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 아우터 세부사항
const OuterContents = () => {
    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='가디건'
                        checked={radio === '가디건'}
                        onChange={handleClickTopRadioButton}
                    />
                    가디건

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='자켓'
                        checked={radio === '자켓'}
                        onChange={handleClickTopRadioButton}
                    />
                    자켓
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='코트'
                        checked={radio === '코트'}
                        onChange={handleClickTopRadioButton}
                    />
                    코트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='패딩'
                        checked={radio === '패딩'}
                        onChange={handleClickTopRadioButton}
                    />
                    패딩
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='아우터 기타'
                        checked={radio === '아우터 기타'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 하의 세부사항
const BottomContents = () => {
    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='숏팬츠'
                        checked={radio === '숏팬츠'}
                        onChange={handleClickTopRadioButton}
                    />
                    숏팬츠

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='롱팬츠'
                        checked={radio === '롱팬츠'}
                        onChange={handleClickTopRadioButton}
                    />
                    롱팬츠
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='미니스커트'
                        checked={radio === '미니스커트'}
                        onChange={handleClickTopRadioButton}
                    />
                    미니스커트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='롱스커트'
                        checked={radio === '롱스커트'}
                        onChange={handleClickTopRadioButton}
                    />
                    롱스커트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='원피스/세트'
                        checked={radio === '원피스/세트'}
                        onChange={handleClickTopRadioButton}
                    />
                    원피스/세트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='하의 기타'
                        checked={radio === '하의 기타'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 신발 세부사항
const ShoesContents = () => {
    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='슬리퍼/쪼리'
                        checked={radio === '슬리퍼/쪼리'}
                        onChange={handleClickTopRadioButton}
                    />
                    슬리퍼/쪼리

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='샌들'
                        checked={radio === '샌들'}
                        onChange={handleClickTopRadioButton}
                    />
                    샌들
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='플랫/로퍼'
                        checked={radio === '플랫/로퍼'}
                        onChange={handleClickTopRadioButton}
                    />
                    플랫/로퍼
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='스니커즈'
                        checked={radio === '스니커즈'}
                        onChange={handleClickTopRadioButton}
                    />
                    스니커즈
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='운동화'
                        checked={radio === '운동화'}
                        onChange={handleClickTopRadioButton}
                    />
                    운동화
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='기타'
                        checked={radio === '신발 기타'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 가방 세부사항
const BagContents = () => {

    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='크로스백'
                        checked={radio === '크로스백'}
                        onChange={handleClickTopRadioButton}
                    />
                    크로스백

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='숄더백'
                        checked={radio === '숄더백'}
                        onChange={handleClickTopRadioButton}
                    />
                    숄더백
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='에코백'
                        checked={radio === '에코백'}
                        onChange={handleClickTopRadioButton}
                    />
                    에코백
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='클러치'
                        checked={radio === '클러치'}
                        onChange={handleClickTopRadioButton}
                    />
                    클러치
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='백팩'
                        checked={radio === '백팩'}
                        onChange={handleClickTopRadioButton}
                    />
                    백팩
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='가방 기타'
                        checked={radio === '가방 기타'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 악세사리 세부사항
const AccessoryContents = () => {

    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='반지'
                        checked={radio === '반지'}
                        onChange={handleClickTopRadioButton}
                    />
                    반지

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='귀걸이'
                        checked={radio === '귀걸이'}
                        onChange={handleClickTopRadioButton}
                    />
                    귀걸이
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='목걸이'
                        checked={radio === '목걸이'}
                        onChange={handleClickTopRadioButton}
                    />
                    목걸이
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='팔찌'
                        checked={radio === '팔찌'}
                        onChange={handleClickTopRadioButton}
                    />
                    팔찌
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='악세사리 기타'
                        checked={radio === '악세사리 기타'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}


const TypeRadio = () => {

    const [radio, setRadio] = useState([]);

    // 세부사항 컴포넌트의 초기값을 false로 설정한다.
    const [topContents, setTopContents] = useState(false);
    const [outerContents, setOuterContents] = useState(false);
    const [bottomContents, setBottomContents] = useState(false);
    const [shoesContents, setShoesContents] = useState(false);
    const [bagContents, setBagContents] = useState(false);
    const [accessoryContents, setAccessoryContents] = useState(false);

    const handleClickRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
        e.target.value === '1' ? setTopContents(true) : setTopContents(false);
        e.target.value === '2' ? setOuterContents(true) : setOuterContents(false);
        e.target.value === '3' ? setBottomContents(true) : setBottomContents(false);
        e.target.value === '4' ? setShoesContents(true) : setShoesContents(false);
        e.target.value === '5' ? setBagContents(true) : setBagContents(false);
        e.target.value === '6' ? setAccessoryContents(true) : setAccessoryContents(false);
    }

    return (
        <div>
            <label>
                <input
                    id='top'
                    type='radio'
                    value='상의'
                    checked={radio === '상의'}
                    onChange={handleClickRadioButton}
                />
                상의
            </label>

            <label>
                <input
                    id='outer'
                    type='radio'
                    value='아우터'
                    checked={radio === '아우터'}
                    onChange={handleClickRadioButton}
                />
                아우터
            </label>

            <label>
                <input
                    id='bottom'
                    type='radio'
                    value='하의'
                    checked={radio === '하의'}
                    onChange={handleClickRadioButton}
                />
                하의
            </label>
            <label>
                <input
                    id='shoes'
                    type='radio'
                    value='신발'
                    checked={radio === '신발'}
                    onChange={handleClickRadioButton}
                />
                신발
            </label>

            <label>
                <input
                    id='bag'
                    type='radio'
                    value='가방'
                    checked={radio === '가방'}
                    onChange={handleClickRadioButton}
                />
                가방
            </label>

            <label>
                <input
                    id='accessory'
                    type='radio'
                    value='악세사리'
                    checked={radio === '악세사리'}
                    onChange={handleClickRadioButton}
                />
                악세사리
            </label>

            <label>
                <input
                    id='etc'
                    type='radio'
                    value='기타'
                    checked={radio === '기타'}
                    onChange={handleClickRadioButton}
                />
                기타
            </label>
            {topContents ? <TopContents /> : <span></span>}
            {outerContents ? <OuterContents /> : <span></span>}
            {bottomContents ? <BottomContents /> : <span></span>}
            {shoesContents ? <ShoesContents /> : <span></span>}
            {bagContents ? <BagContents /> : <span></span>}
            {accessoryContents ? <AccessoryContents /> : <span></span>}

        </div>
    );
};

export default TypeRadio;