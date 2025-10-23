// 선택된 태그의 텍스트만 화면에 출력하는 함수입니다.
const title = (tag) => {
    document.write(tag.innerText);
};

//선택된 박스의 번호만 출력하는 함수입니다.
const boxes = (tag) => {
    const result = document.querySelector('.result');
    for (let i = 0; i < tag.length; i++) {
            document.write(tag[i].innerText);
    }
};

// 1. querySelector로 제목을 선택해서 title() 메서드의 인자로 보내세요.
//값을 저장 -> 변수
const tit = document.querySelector('#main-title')
title(tit)
// 2. querySelectorAll로 3개 박스를 전부 선택해서 boxes() 메서드의 인자로 보내세요.
const boxs = document.querySelectorAll('.box');
boxes(boxs)