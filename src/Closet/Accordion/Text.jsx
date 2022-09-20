import React, { useState } from 'react';
import * as S from '../ProdBasicInfo/ProdBasicInfo.Style';
// 카테고리 목록
const CATEGORY_LIST = [
    { id: 0, data: '서울' },
    { id: 1, data: '인천' },
    { id: 2, data: '경기' },
    { id: 3, data: '경북' },
    { id: 4, data: '경남' },
    { id: 5, data: '전북' },
    { id: 6, data: '전남' },
    { id: 7, data: '제주' },
];

function ProdBasicInfo() {
    // 데이터를 넣을 빈배열
    const [checkedList, setCheckedList] = useState([]);
    // 1️⃣ onChange함수를 사용하여 이벤트 감지, 필요한 값 받아오기
    const onCheckedElement = (checked, item) => {
        if (checked) {
            setCheckedList([...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
        }
    };
    // 2️⃣ x를 누르면 리스팅 목록에서 카테고리가 삭제되며 체크도 해제 된다
    const onRemove = item => {
        setCheckedList(checkedList.filter(el => el !== item));
    };

    return (
        <S.CategoryContainer>
            <S.Category>카테고리 *</S.Category>
            <S.SelectContainer>
    // map 함수를 이용해 체크박스 container에 체크박스 목록 생성하기
                <S.CheckBox>
                    {CATEGORY_LIST.map(item => {
                        return (
                            <S.Label key={item.id}>
                                <S.Check
                                    type="checkbox"
                                    // 이때 value값으로 data를 지정해준다.
                                    value={item.data}
                                    // onChange이벤트가 발생하면 check여부와 value(data)값을 전달하여 배열에 data를 넣어준다.
                                    onChange={e => {
                                        onCheckedElement(e.target.checked, e.target.value);
                                    }}
                                    // 3️⃣ 체크표시 & 해제를 시키는 로직. 배열에 data가 있으면 true, 없으면 false
                                    checked={checkedList.includes(item.data) ? true : false}
                                />
                                <S.Type>{item.data}</S.Type>
                            </S.Label>
                        );
                    })}
                </S.CheckBox>
                <S.SelectedBox>
            // 여기서부턴 리스팅 container!
                    // checkedList가 빈배열일 경우, 즉 아무 데이터도 없을땐 길이가0이므로 조건부 렌더링을 사용하여 "카테고리를 지정해주세요" 문구가 출력되게 한다.
                    {checkedList.length === 0 && (
                        <S.AlertMessage>{'카테고리를 지정해 주세요.'}</S.AlertMessage>
                    )}
           // checkedList에 데이터가 들어가있을 경우 위와 마찬지로 map함수를 사용하여 데이터가 리스팅되도록 한다.
                    {checkedList.map(item => {
                        return (
                            <S.SelectedCategory key={item}>
                                <S.Selected>{item}</S.Selected>
            // 카테고리를 삭제하면 배열에서 데이터가 삭제돠게 만드는 이벤트
                                <S.CancelChecked onClick={() => onRemove(item)}>
                                    X
                                </S.CancelChecked>
                            </S.SelectedCategory>
                        );
                    })}
                </S.SelectedBox>
            </S.SelectContainer>
        </S.CategoryContainer>
    );
};