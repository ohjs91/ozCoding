// 🚀 실습 1: 기본적인 배열 구조분해할당
const fruits = ['사과', '바나나', '오렌지', '망고'];
// fruits 배열에서 첫 번째와 두 번째 요소를 변수로 분리해보세요
let [apple, banana] = fruits;
//✨ 결과 확인
console.log('첫 번째 과일:', apple);
console.log('두 번째 과일:', banana);
console.log('------------------------------------------');

// 🚀 실습 2: 건너뛰기와 나머지 요소 가져오기
// fruits 배열에서 첫 번째 요소는 건너뛰고, 두 번째 요소와 나머지를 가져와보세요
let [,second,...remainingFruits] = fruits;
//✨ 결과 확인
console.log('두 번째 과일:', second);
console.log('나머지 과일들:', remainingFruits);
console.log('------------------------------------------');

// 🚀 실습 3: 기본값 설정하기
const colors = ['빨강', '파랑'];
// colors 배열을 구조분해할당하면서 없는 세 번째 값의 기본값을 '초록'으로 설정해보세요
const [red,blue,green = '초록'] = colors
//✨ 결과 확인
console.log('설정된 색상들:', red, blue, green);
console.log('------------------------------------------');

// 🚀 실습 4: 변수 값 교환하기
let number1 = 100;
let number2 = 200;
// number1과 number2의 값을 구조분해할당을 사용해서 교환해보세요
[number1, number2] = [number2, number1];

//✨ 결과 확인
console.log('교환된 값:', number1, number2);
console.log('------------------------------------------');

// 실습 5: 중첩 배열 구조분해할당
const coordinates = [
    [1, 2],
    [3, 4],
    [5, 6],
];
// coordinates의 두 번째 좌표에서 x, y값을 각각 변수로 분리해보세요
const [, [x, y]] = coordinates;

//✨ 결과 확인
console.log('첫 번째 좌표의 x값:', x); //3
console.log('첫 번째 좌표의 y값:', y); //4
console.log('------------------------------------------');
