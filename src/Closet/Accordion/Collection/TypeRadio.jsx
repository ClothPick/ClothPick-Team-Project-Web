import React from 'react';
import { useState } from 'react';

const TypeRadio = () => {
    const [radio, setRadio] = useState([]);

    const handleClickRadioButton = (e) => {
        console.log(e.target.value);
        setRadio(e.target.value);
    }
    return (
        <div>
            <label>
                <input
                    type='radio'
                    value='1'
                    checked={radio === '1'}
                    onChange={handleClickRadioButton}
                />
                상의
            </label>

            <label>
                <input
                    type='radio'
                    value='2'
                    checked={radio === '2'}
                    onChange={handleClickRadioButton}
                />
                아우터
            </label>

            <label>
                <input
                    type='radio'
                    value='3'
                    checked={radio === '3'}
                    onChange={handleClickRadioButton}
                />
                하의
            </label>

            <label>
                <input
                    type='radio'
                    value='4'
                    checked={radio === '4'}
                    onChange={handleClickRadioButton}
                />
                신발
            </label>

            <label>
                <input
                    type='radio'
                    value='5'
                    checked={radio === '5'}
                    onChange={handleClickRadioButton}
                />
                가방
            </label>

            <label>
                <input
                    type='radio'
                    value='6'
                    checked={radio === '6'}
                    onChange={handleClickRadioButton}
                />
                악세사리
            </label>

            <label>
                <input
                    type='radio'
                    value='7'
                    checked={radio === '7'}
                    onChange={handleClickRadioButton}
                />
                기타
            </label>

        </div>
    );
};

export default TypeRadio;