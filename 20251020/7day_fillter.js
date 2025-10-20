// 🚀 실습 예제 1: 숫자로 이루어진 배열에서 짝수만 필터링하기
const numbers = [1, 2, 3, 4, 5];

// numbers 배열에서 짝수만 필터링하여 새로운 배열을 만들어보세요.
// 선언되어 있는 evenNumbers 변수에 새로운 배열을 할당하세요.
let evenNumbers;
evenNumbers = numbers.filter(v => v%2 === 0)
// ✨ 결과 확인 : 기존 배열과 filter 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers);
console.log('filter 적용 배열:', evenNumbers);

console.log('------------------------------------------');

// 🚀 실습 예제 2: 문자열 배열에서 단어에 'n'가 포함된 문자열만 필터링하고 싶은 경우
const fruits = ['apple', 'banana', 'orange'];
// 선언되어 있는 fruitsWithN 변수에 새로운 배열을 할당하세요.
let fruitsWithN;
fruitsWithN = fruits.filter(v => v.includes('n'))
// ✨ 결과 확인 : 기존 배열과 filter 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', fruits);
console.log('filter 적용 배열:', fruitsWithN);

console.log('------------------------------------------');

// 🚀 실습 예제 3 : 객체 배열에서 나이가 18 이상인 사용자만 필터링하고 싶은 경우
const users = [
    { id: 1, name: '김오즈', age: 20 },
    { id: 2, name: '박자바', age: 15 },
    { id: 3, name: '변우석', age: 24 },
];
// users 배열에서 이름만 추출하여 새로운 배열을 만들어보세요.
// 선언되어 있는 adults 변수에 새로운 배열을 할당하세요.
let adults;
adults = users.filter(v => v.age >= 18)
// ✨ 결과 확인 : 기존 배열과 filter 함수를 적용한 배열의 결과를 함께 확인해 보세요.
console.log('기존 배열:', users);
console.log('filter 적용 배열:', adults);
