/**
 * JavaScript 6일차 과제
 * 계산기 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 사칙연산이 가능한 계산기 함수를 만들어주세요.
 *  - num1, num2, operator 매개변수를 받아 다음과 같이 계산해주세요.
 *    - operator: `+`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 + num2`
 *    - operator: `-`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 - num2`
 *    - operator: `*`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 * num2`
 *    - operator: `/`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 / num2`
 *      - 0으로 나눌 경우는 0이 저장되게 해주세요.
 */

const calculateData = {
    view: 0,
    history: 0,
};

function calculator(num1, num2, operator) {
    switch (operator){
        case '+':
            calculateData.view = num1 + num2
            calculateData.history = calculateData.view 
            break;
        case '-':
            calculateData.view = num1 + num2
            calculateData.history = calculateData.view 
            break;
        case '*':
            calculateData.view = num1 + num2
            calculateData.history = calculateData.view 
            break;  
        case '/':
            if(num2 == 0){
                calculateData.view = 0
                
            }else{
                calculateData.view = num1 + num2
                calculateData.history = calculateData.view 
            }
            break;
        default:
            return;              
    }
}

// 계산기 테스트용 출력 코드
console.log(
    `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(1, 2, '+');
console.log(
    `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 1, '-');
console.log(
    `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 2, '*');
console.log(
    `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 2, '/');
console.log(
    `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 0, '/');
console.log(
    `view is ${calculateData.view}, history is ${calculateData.history}`
);
