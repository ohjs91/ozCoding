// 🚀 실습 예제 1: 배열의 숫자를 두 배로 만들기
const numbers = [1, 2, 3, 4, 5];

// numbers 배열의 각 숫자를 2배로 만든 새로운 배열을 만들어보세요.
// 선언되어 있는 doubledNumbers 변수에 새로운 배열을 할당하세요.
let doubledNumbers;
doubledNumbers = numbers.map(v=> v*2);
// ✨ 결과 확인 : 기존 배열과 map 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers);
console.log('map 적용 배열:', doubledNumbers);

console.log('------------------------------------------');

// 🚀 실습 예제 2: 배열의 과일이름을 대문자로 변환하기
const fruits = ['apple', 'banana', 'orange'];
// fruits 배열의 과일이름를 대문자로 변환한 새로운 배열을 만들어보세요.
// 선언되어 있는 uppercasedFruits 변수에 새로운 배열을 할당하세요.
let uppercasedFruits;
uppercasedFruits = fruits.map(v => v.toUpperCase())
// ✨ 결과 확인 : 기존 배열과 map 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', fruits);
console.log('map 적용 배열:', uppercasedFruits);

console.log('------------------------------------------');

// 🚀 실습 예제 3: 객체 배열에서 특정 속성 추출하기
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
// users 배열에서 이름만 추출하여 새로운 배열을 만들어보세요.
// 선언되어 있는 userNames 변수에 새로운 배열을 할당하세요.
let userNames;
userNames = users.map(v => v.name);
// ✨ 결과 확인 : 기존 배열과 map 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', users);
console.log('map 적용 배열:', userNames);
