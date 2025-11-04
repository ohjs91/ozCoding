const allBtns = document.querySelectorAll('.button');
// 숫자 버튼
const numberBtns = document.querySelectorAll('.number');
// 결과 화면
const viewNumber = document.querySelector('.result');
// 초기화 버튼
const clearBtn = document.querySelector('.clear');
// 수소점 버튼
const pointBtn = document.querySelector('.point');
// 이벤트 버블링 확인
const keys = document.querySelector('.keys')
// 앞의 값
let firstOperand = '';
// 현재 값
let secondOperand = '';
// 사칙연산 담는값 
let operator = '';


//모든 버튼 선택
allBtns.forEach(v => {
    // 버튼 하나하나 순회
    v.addEventListener('click', function(){
        // 숫자버튼 일때
        if (this.classList.contains('number')) {
            if(secondOperand.length >= 16) return 
            // 사칙연산을 안눌렀을때 숫자나 . 을 누르면 입력전에 초기화한다
            if(firstOperand && operator == '' && !secondOperand.includes('.')) {
                secondOperand = ''
            }
            // 0 을 여러번 입력 방지
            if(viewNumber.value == 0 && v.value == 0 && !secondOperand.includes('.')){
                return
            }
            
            secondOperand +=  this.value;
            
            // 화면 출력
            viewNumber.value = secondOperand.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            return;
        }
        // . 버튼 일때
        if (this.classList.contains('point')) {
            if(secondOperand.includes('.')){
                // . 이있을때 . 입력을 막는다
                return
            }else if(secondOperand == '') {
                // 입력 값이 없이 . 을 눌렀을때 0. 으로 시작하게 한다
                secondOperand = 0 + this.value
            }else{
                secondOperand +=  this.value
            }
            viewNumber.value = secondOperand.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            return
        }
        // 초기화 일때
        if (this.classList.contains('clear')) {
            // 다 초기값으로 돌린다
            viewNumber.value = 0;
            firstOperand = 0;
            secondOperand = '';
            operator = '';
            return
        }
        // 연산자 일때
        if (this.classList.contains('operator')){

            // 연속 연산 일때 = 이미 연산을 눌렀고 두번째 값이 있을때
            if(operator && secondOperand !== ''){
                // 계산 함수 실행
                const result = calculate(firstOperand,secondOperand,operator)
                // 계산된결과 화면 출력
                viewNumber.value = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // 새 연산자 저장
                operator = this.value
                // 결과값 처음값에 저장
                firstOperand = result;
                // 뒤에값 비우기
                secondOperand = ''
            }else{// 첫 연산 할때
                // 연산자 저장
                operator = this.value
                // firstOperand 에 secondOperand 저장하고 비움
                firstOperand = secondOperand
                secondOperand = ''
                console.log('firstOperand = ', firstOperand)
                console.log('operator = ', operator)
            }
            return
        }

        // 계산 
        if (this.classList.contains('complete')){
            // 계산 함수 실행
            const result = calculate(firstOperand,secondOperand,operator)
             // 계산결과 화면에 출력
            viewNumber.value = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // secondOperand 에 result 저장
            secondOperand = result;
            // 사칙연산 초기화
            operator = ''
        }

        //삭제 
        if (this.classList.contains('del')){
            secondOperand = secondOperand.slice(0, -1)
            viewNumber.value = secondOperand
        }
    })
})

function calculate (first,second,operator){
    first = Number(first)
    second = Number(second)
    let resultNum = 0;
    switch (operator) {  
        case '+': 
            resultNum = first + second
            break;
        case '-': 
            resultNum = first - second
            break;
        case '*': 
            resultNum = first * second
            break;
        case '/': 
            resultNum = second == 0 ? NaN : first / second
            break;
        default: 
            console.log('error')
    }
    return String(resultNum).length > 16 ? String(resultNum).slice(0, 16) : String(resultNum);
}