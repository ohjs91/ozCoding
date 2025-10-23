// 동기적으로 실행되는 코드입니다.
console.log('1. 작업 시작');

for (let i = 0; i < 3; i++) {
    console.log(`2. ${i}번째 작업 실행 중`);
}

console.log('3. 작업 완료');

console.log('-------------------------------');
//비동기적으로 실행되는 코드입니다.
console.log('1. 비동기 작업시작');

setTimeout(() => {
    console.log('2. 2초 후 실행');
}, 2000);

console.log('3. 끝');