// 🚀 실습 예제 1: Spread Syntax를 사용하여 배열을 복사하세요.
const arr = [10, 20, 30];

// 선언되어 있는 copied1 변수에 결과를 할당하세요.
let copied1;
copied1 = [...arr]
console.log('원본 배열 :', arr);
console.log('복사 배열 :', copied1);

// ✨ 결과 확인 : 기존 배열과 복사한 배열을 === 연산자를 사용하여 결과를 확인해보세요.
console.log('일치 확인 결과:', arr === copied1);
console.log('------------------------------------------');

// 🚀 실습 예제 2: slice()를 사용하여 배열을 복사하세요.
const arr2 = ['apple', 'banana', 'grape'];

// 선언되어 있는 copied2 변수에 결과를 할당하세요.
let copied2;
copied2 = arr2.slice();
console.log('원본 배열 :', arr2);
console.log('복사 배열 :', copied2);
// ✨ 결과 확인 : 기존 배열과 복사한 배열을 === 연산자를 사용하여 결과를 확인해보세요.
console.log('일치 확인 결과:', arr2 === copied2);
console.log('------------------------------------------');

// 🚀 실습 예제 3 : 주어진 배열을 깊은 복사를 통해 복사해주세요.
const arr3 = [
    [1, 2],
    [3, 4],
];

// 선언되어 있는 copied3 변수에 결과를 할당하세요.
// 복사한 배열의 [0][1]에 있는 요소의 값을 100으로 변경하세요.
let copied3;
copied3 = [...arr3];
copied3[0][1] = 100;

console.log('원본 배열:', arr3);
console.log('깊은 복사 배열 :', copied3);

// ✨ 결과 확인 : 기존 배열과 복사한 배열을 === 연산자를 사용하여 결과를 확인해보세요.
console.log('일치 확인 결과:', arr3 === copied3);
console.log('------------------------------------------');
