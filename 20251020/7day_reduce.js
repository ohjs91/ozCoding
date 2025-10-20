// 🚀 실습 예제 1: 숫자로 이루어진 배열에서 요소의 총 합을 구하고 싶은 경우
const numbers = [1, 2, 3, 4, 5];

// numbers 배열에서 요소의 총 합을 구하여 결과를 반환해주세요.
// 선언되어 있는 sum 변수에 결과를 할당하세요.
let sum;
sum = numbers.reduce((p,v,i)=> {
    return p = p + v;
},0)
// ✨ 결과 확인 : 기존 배열과 reduce 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers);
console.log('reduce 적용 결과:', sum);

console.log('------------------------------------------');

// 🚀 실습 예제 2: 숫자로 이루어진 배열에서 최대값을 구하고 싶은 경우
const numbers2 = [42, 70, 33, 2, 88 ];

// numbers2 배열의 요소 중 최대값을 찾아 결과를 반환해주세요.
// 선언되어 있는 max 변수에 결과를 할당하세요.
let max;
max = numbers2.reduce((p,v) => {
    return p > v ? p : v;
    /* 
        동작순서
        0 > 42 false p = v 가되서 42
        42 > 70 false p = v 가되서 70
        70 > 33 true p = p 가되서 70
        70 > 2 true p = p 가되서 70
        70 > 88 false p = v 가되서 88

    */
},0)
// ✨ 결과 확인 : 기존 배열과 reduce 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', numbers2);
console.log('reduce 적용 결과:', max);

console.log('------------------------------------------');

// 🚀 실습 예제 3 : 문자열로 이루어진 배열에서 단어 빈도수를 계산하고 싶은 경우
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// words 배열에서 word를 key, 단어 빈도수를 value로 가지는 객체를 반환해주세요.
// 선언되어 있는 wordCount 생성한 객체를 할당하세요.
// 초기값은 {} 빈 객체로 지정해주세요.
let wordCount;
wordCount = words.reduce((p,v,i) => {
    return {
        ...p,
        [v]: p[v] ? p[v] + 1 : 1
    }
}, {})
// ✨ 결과 확인 : 기존 배열과 reduce 함수를 적용한 결과를 함께 확인해 보세요.
console.log('기존 배열:', words);
console.log('reduce 적용 결과:', wordCount);
