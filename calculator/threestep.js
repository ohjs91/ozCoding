// 이슈 ex) 3.0003 - 0.3 하면 2.700300000000004 가나옴
const allBtns = document.querySelectorAll('.button');
// 숫자 버튼
const numberBtns = document.querySelectorAll('.number');
// 결과 화면
const viewNumber = document.querySelector('.result');
// 초기화 버튼
const clearBtn = document.querySelector('.clear');
// 수소점 버튼
const pointBtn = document.querySelector('.point');

// 앞의 값
let prevNum = 0;
// 현재 값
let curNum = '';

//모든 버튼 
allBtns.forEach(v => {
    v.addEventListener('click', function(){
        console.log(v.value)
    })
})

// 숫자 버튼 이벤트 
numberBtns.forEach(v => {
    v.addEventListener('click', function(){
        // 0 을 여러번 입력 방지
        if(viewNumber.value == 0 && v.value == 0 && !curNum.includes('.')){
            return
        }else{
            curNum = curNum + this.value;
        }
        // 화면 출력
        viewNumber.value = curNum
    })
})
// 소수점 버튼 이벤트
pointBtn.addEventListener('click', function(){
    if(curNum.includes('.')){
        // . 이있을때 . 입력을 막는다
        return
    }else if(!curNum) {
        // 입력 값이 없이 . 을 눌렀을때 0. 으로 시작하게 한다
        curNum = 0 + this.value
    }else{
        curNum =  curNum + this.value
    }
    viewNumber.value = curNum
})

// 초기화
clearBtn.addEventListener('click', function(){
    // 다 초기값으로 돌린다
    viewNumber.value = 0;
    prevNum = 0;
    curNum = '';
})

