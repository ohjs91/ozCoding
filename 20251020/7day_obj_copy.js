// 🚀 실습 예제 1: Spread Syntax를 사용하여 객체를 복사하세요.
const person = { name: '박서준', age: 20 };

// 선언되어 있는 copiedPerson 변수에 결과를 할당하세요.
let copiedPerson;
copiedPerson = {...person}
console.log('원본 객체 :', person);
console.log('복사 객체 :', copiedPerson);

// ✨ 결과 확인 : 기존 객체와 복사한 객체에 대해 === 연산자를 사용한 결과를 확인해보세요.
console.log('일치 확인 결과:', person === copiedPerson);
console.log('------------------------------------------');

// 🚀 실습 예제 2: Object.assign()를 사용하여 객체를 복사하세요.
const car = { brand: 'BMW', model: 'MINI COOPER' };

// 선언되어 있는 copiedCar 변수에 결과를 할당하세요.
let copiedCar;
copiedCar = Object.assign({}, car)
console.log('원본 객체 :', car);
console.log('복사 객체 :', copiedCar);

// ✨ 결과 확인 : 기존 객체와 복사한 객체에 대해 === 연산자를 사용한 결과를 확인해보세요.
console.log('일치 확인 결과:', car === copiedCar);
console.log('------------------------------------------');

// 🚀 실습 예제 3 : 주어진 객체를 깊은 복사를 통해 복사하세요.
const user = { name: '카리나', address: { city: '서울특별시' } };

// 선언되어 있는 copiedUser 변수에 결과를 할당하세요.
let copiedUser;
copiedUser = JSON.parse(JSON.stringify(user))
// 복사한 객체의 city값을 '부산광역시'로 변경하세요.
copiedUser.address.city = '부산광역시';

console.log('원본 객체:', user);
console.log('깊은 복사 객체 :', copiedUser);

// ✨ 결과 확인 : 기존 객체와 복사한 객체에 대해 === 연산자를 사용한 결과를 확인해보세요.
console.log('일치 확인 결과:', user === copiedUser);
console.log('------------------------------------------');
