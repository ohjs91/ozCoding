//setTimeout을 중첩해서 작성했을 때 코드 동작을 살펴보세요.
console.log('1.시작');

setTimeout(() => {
    console.log('2초 후 실행');

    setTimeout(() => {
        console.log('⏳ 추가로 3초 후 실행');
    }, 3000);
}, 2000);

console.log('1번 실행 완료');
