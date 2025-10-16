let arry = [1, 2, 3, 4, 5];
let arry2 = ['a', 'b', 'c', 'd', 'e'];

// 원본 배열 유지
const join1 = arry.join(); // 구분자를 지정하지 않으면 쉼표(,)가 기본값

// 하이픈(-)을 구분자로 사용하여 문자열로 결합
const join2 = arry2.join('-');

// 공백(' ')을 구분자로 사용하여 문자열로 결합
const join3 = arry.join(' ');

// --- 결과 출력 ---
console.log(arry);      
console.log(arry2);

console.log(join1);  
console.log(join2);  
console.log(join3);  

console.log(typeof join1); // 출력: string