// 🚀 실습 예제 1: forEach 메서드를 사용하여 과일의 이름을 모두 출력하세요.
const fruits = ['apple', 'banana', 'orange'];

// ✅ 이 곳에 코드를 작성해주세요.
fruits.forEach((v,i) => {
    console.log(v + 1)
    return v+1
})
// forEach는 반환값이 없기 때문에 변수에 할당하지 않습니다.
// ✨ 결과 확인 : 기존 배열과 forEach 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', fruits);
console.log('------------------------------------------');

// 🚀 실습 예제 2: some 메서드를 사용하여 미성년자인 나이가 있는지에 대한 결과를 확인하세요.
const ages = [15, 28, 22, 33];

// 선언되어 있는 isMinor 변수에 결과를 할당하세요.
let isMinor;
isMinor = ages.some((v) => v<=19)
// ✨ 결과 확인 : 기존 배열과 some 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', ages);
console.log('some 적용 결과(미성년자인 유저가 있나요?):', isMinor);

console.log('------------------------------------------');

// 🚀 실습 예제 3 : every 메서드를 사용하여 user가 모두 성인인지 확인하세요.
const users = [
    { id: 1, name: '김코딩', age: 23 },
    { id: 2, name: '박자바', age: 28 },
    { id: 3, name: '최오즈', age: 30 },
];

// 선언되어 있는 allAdult 변수에 결과를 할당하세요.
let allAdult;
allAdult = users.every(v => v.age > 19)
// ✨ 결과 확인 : 기존 배열과 every 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', users);
console.log('every 적용 결과(모든 유저가 성인 유저인가요?):', allAdult);

console.log('------------------------------------------');

// 🚀 실습 예제 4 : find 메서드를 사용하여 가격이 800원 이상인 상품의 데이터를 반환하세요.
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 700 },
];

// 선언되어 있는 expensiveProduct 변수에 결과를 할당하세요.
let expensiveProduct;
expensiveProduct = products.find(v => v.price >= 800)
// // ✨ 결과 확인 : 기존 배열과 find 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', products);
console.log('find 적용 결과:', expensiveProduct);

console.log('------------------------------------------');

// 🚀 실습 예제 5 : sort 메서드를 사용하여 배열 내 숫자 요소를 오름차순으로 정렬하세요.
const numbers = [5, 2, 9, 1, 3];

// ✅ 이 곳에 코드를 작성해주세요.
numbers.sort((a,b) => a - b)
// ✨ 결과 확인 : 기존 배열과 sort 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers, '(원본 배열이 변경됨)');
console.log('sort 적용 결과:', numbers);
