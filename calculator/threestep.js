const allBtns = document.querySelectorAll('.button');
// 숫자 버튼
const numberBtns = document.querySelectorAll('.number');
// 결과 화면
const viewNumber = document.querySelector('.result');
// 초기화 버튼
const clearBtn = document.querySelector('.clear');
// 수소점 버튼
const pointBtn = document.querySelector('.point');
// 이벤트 버블링 확인
const keys = document.querySelector('.keys')
// 앞의 값
let prevNum = 0;
// 현재 값
let curNum = '';

// 이벤트 버블링 확인
keys.addEventListener('click',function(e){
    console.log('버블링', e.target.value)
    // 버튼을 감싸고있는 keys 에 클릭 이벤트를 주면
    // 실제 클릭된 대상이 자식 button이라도 이벤트가 keys 까지 전파되어 실행된다.
})


//모든 버튼 선택
allBtns.forEach(v => {
    // 버튼 하나하나 순회
    v.addEventListener('click', function(){
        console.log(v.value) // 미션 1
        // 숫자버튼 일때
        if (this.classList.contains('number')) {
            // 0 을 여러번 입력 방지
            if(viewNumber.value == 0 && v.value == 0 && !curNum.includes('.')){
                return
            }else{
                curNum = curNum + this.value;
            }
            // 화면 출력
            viewNumber.value = curNum
            return;
        }
        // . 버튼 일때
        if (this.classList.contains('point')) {
            if(curNum.includes('.')){
                // . 이있을때 . 입력을 막는다
                return
            }else if(curNum == '') {
                // 입력 값이 없이 . 을 눌렀을때 0. 으로 시작하게 한다
                curNum = 0 + this.value
            }else{
                curNum =  curNum + this.value
            }
            viewNumber.value = curNum
            return
        }
        // 초기화 일때
        if (this.classList.contains('clear')) {
            // 다 초기값으로 돌린다
            viewNumber.value = 0;
            prevNum = 0;
            curNum = '';
            return
        }
    })
})
// 숫자 버튼 이벤트 
// numberBtns.forEach(v => {
//     v.addEventListener('click', function(){
//         // 0 을 여러번 입력 방지
//         if(viewNumber.value == 0 && v.value == 0 && !curNum.includes('.')){
//             return
//         }else{
//             curNum = curNum + this.value;
//         }
//         // 화면 출력
//         viewNumber.value = curNum
//     })
// })
// // 소수점 버튼 이벤트
// pointBtn.addEventListener('click', function(){
//     if(curNum.includes('.')){
//         // . 이있을때 . 입력을 막는다
//         return
//     }else if(!curNum) {
//         // 입력 값이 없이 . 을 눌렀을때 0. 으로 시작하게 한다
//         curNum = 0 + this.value
//     }else{
//         curNum =  curNum + this.value
//     }
//     viewNumber.value = curNum
// })
// // 초기화
// clearBtn.addEventListener('click', function(){
//     // 다 초기값으로 돌린다
//     viewNumber.value = 0;
//     prevNum = 0;
//     curNum = '';
// })

