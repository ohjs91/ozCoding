// Promise를 반환하는 함수 asyncFunction()을 완성하세요.
function asyncFunction() {
  // new 키워드로 Promise를 생성 후 반환합니다.
    return new Promise((resolve, reject) => {
        resolve("asyncFunction 실행!");
    });
  //resolve()를 호출하여 'asyncFunction 실행!'을 반환합니다.
}

// asyncFunction()을 호출한 후, then() 체이닝으로 다음 작업을 작성하세요.
asyncFunction()
    .then((result) => {
        console.log("결과:", result);
    })
    .catch((error) => {
        console.error("catch에서 처리:", error);
    })
    .finally(() => {
        console.log("작업 종료"); // 항상 실행됨
    });
// resolve()에서 전달받은 값을 출력하세요.
