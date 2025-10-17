/**
 * JavaScript 6일차 과제
 * 할 일 목록 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - Todos는 할 일들이 들어가는 객체입니다.
 * - Todos에는 다음과 같은 형태로 할 일들이 들어갑니다.
{
    '첫번째': { todo: '운동하기', finished: false },
    '두번째': { todo: '청소하기', finished: false },
    '세번째': { todo: 'JavaScript 공부하기', finished: false },
    '네번째': { todo: 'HTML/CSS 복습하기', finished: false }
}
 * - 함수를 활용하여 할 일 목록 관리 함수를 만듭니다.
 *    - 할 일 목록 추가 함수
 *    - 할 일 목록 삭제 함수
 *    - 할 일 목록 완료 함수
 */

const Todos = {
    '첫번째': { todo: '운동하기', finished: false },
    '두번째': { todo: '청소하기', finished: false },
    '세번째': { todo: 'JavaScript 공부하기', finished: false },
    '네번째': { todo: 'HTML/CSS 복습하기', finished: false }
};

// 함수를 완성해주세요.

// 할 일 목록 추가 함수
function addTodo(key, work) {
    Todos[key] = {todo: work, finished:false}
}

// 할 일 목록 삭제 함수
function deleteTodo(key) {
    delete Todos[key];
}

// 할 일 목록 완료 함수
function finishTodo(key) {
    Todos[key].finished = true
}
addTodo('다섯번째', '리액트')
deleteTodo('첫번째')
finishTodo('두번째')