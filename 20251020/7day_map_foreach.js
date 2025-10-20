// ✨ 각 코드를 보고 map()과 forEach() 중 적합한 메소드를 사용하여 구현해주세요.
// 🚀 실습 예제 1: 배열의 각 숫자를 2배로 변환하여 새로운 배열을 반환해주세요.
const numbers = [2, 4, 6];

let doubled;
doubled = numbers.forEach(v => v*2);
// forEach는 반환값이 없기 때문에 변수에 할당하지 않습니다.
// ✨ 결과 확인 : 기존 배열과 메서드를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers);
console.log('메서드 적용 결과:', doubled);
console.log('------------------------------------------');

// 🚀 실습 예제 2: 배열의 각 요소를 콘솔에 출력해주세요.
const names = ['변우석', '최우식', '김오즈'];

// ✅ 이 곳에 코드를 작성해주세요.
names.forEach(v => console.log(v))
// ✨ 결과 확인 : 기존 배열과 메서드를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', names);
console.log('------------------------------------------');

// 🚀 실습 예제 3 : 학생 점수의 평균을 계산하여 결과를 반환해주세요.
const scores = [80, 90, 100];

// 선언되어 있는 total 변수에 점수의 총 합을 할당하세요.
let total = 0;

// 선언되어 있는 average 변수에 점수의 평균값을 할당하세요.
let average;
average = scores.forEach(v => total += v )
average = total / scores.length
// ✨ 결과 확인 : 기존 배열과 메서드를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', scores);
console.log('메서드 적용 결과:', average);
console.log('------------------------------------------');
