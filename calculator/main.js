/*
    무엇을 구현해야 될지 알아보자.
*/

// 이슈 ex) 3.0003 - 0.3 하면 2.700300000000004 가나옴
const allBtns = document.querySelectorAll('button');
// 숫자 버튼
const numberBtns = document.querySelectorAll('.number');
// 사칙연산 버튼
const operatorBtns = document.querySelectorAll('.operator');
// 결과 화면
const viewNumber = document.querySelector('.result');
// 이전값 보여주기
const prevNumber = document.querySelector('.prev_num');
// 선택한 연산자 보여주기
const operator = document.querySelector('.prev_operator');
// 연산할값 보여주기
const curNumber = document.querySelector('.cur_num');
// 초기화 버튼
const clearBtn = document.querySelector('.clear');
// 삭제 버튼
const delBtn = document.querySelector('.del');
// 수소점 버튼
const pointBtn = document.querySelector('.point');
// 계산 완료 버튼
const resultBtn = document.querySelector('.complete');
//이전값
let prevNum = 0;

// 현재 값
let curNum = '';

// 사칙연산 담는값 
let operatorValue = '';

//모든 버튼 active 클래스 추가
// allBtns.forEach(v => {
//     v.addEventListener('click', function(){
//         setTimeout(() => this.classList.remove('active'), 100);
//         this.classList.add('active');
//     })
// })

// 숫자 버튼 이벤트 
numberBtns.forEach(v => {
    v.addEventListener('click', function(){
        // 사칙연산을 안눌렀을때 숫자나 . 을 누르면 입력전에 초기화한다
        if(prevNum && operatorValue == '' && !curNum.includes('.')) {
            curNum = ''
        }
        // 0 일때 0을 누르면 예외처리
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
    
    // console.log('pre',prevNum)
    console.log('cur',curNum)
    // console.log(operatorValue)
    curNum = String(curNum)
    if(curNum.includes('.')){
        return
    }
    if(prevNum && operatorValue == '') {
        // 앞에 숫자없이 점부터 눌렀을때 0. 으로 시작하게 한다
        curNum = 0 + this.value
    }else{
        curNum = curNum == '' ? 0 + this.value : curNum + this.value
    }
    
    viewNumber.value = curNum
})
// 사칙연산 버튼 이벤트 
operatorBtns.forEach(v => {
    v.addEventListener('click', function(){
        if(operatorValue == this.value){
            return
        }else{
            operatorValue = this.value
            prevNum = curNum
            curNum = ''
            prevNumber.textContent = prevNum
            operator.textContent = operatorValue
            curNumber.textContent = ''
        }
    })
})
// 출력
function viewDisplay(){

}

// 초기화
clearBtn.addEventListener('click', function(){
    viewNumber.value = 0;
    prevNum = 0;
    curNum = '';
    operatorValue = '';
    prevNumber.textContent = ''
    operator.textContent = ''
    curNumber.textContent = ''
})
// 삭제
delBtn.addEventListener('click', function(){
    curNum = curNum.slice(0, -1)
    viewNumber.value = curNum
})


resultBtn.addEventListener('click', function(){
    resultFunc()
})

// 결과 함수
function resultFunc(){
    
    let resultNum = 0;
    switch (operatorValue) {  
        case '+': 
            resultNum = plusFunc()
            break;
        case '-': 
            resultNum = minusFunc()
            break;
        case '*': 
            resultNum = multiFunc()
            break;
        case '/': 
            resultNum = divisionFunc()
            break;
        default: 
    } 
    curNumber.textContent = curNum
    console.log(resultNum)
    viewNumber.value = resultNum
    curNum = String(resultNum)
    operatorValue = ''
}
// 더하기 함수
function plusFunc(){
    return Number(prevNum) + Number(curNum)
}

// 뺴기 함수
function minusFunc(){
    return Number(prevNum) - Number(curNum)
}

// 곱셈 함수
function multiFunc(){
    return Number(prevNum) * Number(curNum)
}

// 나눗셈 함수
function divisionFunc(){
    return Number(prevNum) / Number(curNum)
}