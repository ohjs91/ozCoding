/**
 * JavaScript 7일차 과제
 * 마왕 물리치기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - reduce() 함수를 사용하여 해결해주세요.
 * - pattern은 마왕의 공격 패턴을 담은 배열입니다.
 *    - '[공격]'이라는 문자열이 포함된 경우, 방어를 해야하기에 마왕을 공격할 수 없습니다.
 *    - 마왕의 공격 패턴이 0일 때 마왕을 공격할 수 있습니다.
 * - 마왕을 공격할 때는, 박오즈가 주사위를 굴려 공격합니다. 주사위는 10, 20, 30, 40, 50 60 중 랜덤하게 나오며, 주사위 숫자에 맞춰 마왕을 공격할 수 있습니다.
 * - 마왕의 체력(HP)은 총 100입니다.
 * - 모든 패턴을 순회할 때, 박오즈가 마왕을 쓰러뜨렸는지 확인하는 문자열을 출력해주세요.
    - 마왕이 쓰러졌을 때: `‘박오즈는 강했다.’`
    - 마왕을 쓰러뜨리지 못했을 때: `‘박오즈는 보물에 생을 바쳤다.’`
 */

// 공격할 수 있는 데미지 배열
const dice = [10, 20, 30, 40, 50, 60];

// 마왕의 공격 패턴이 담긴 배열
const pattern = [
    '[공격] 뿔 찌르기',
    '[공격] 박치기',
    0,
    '[공격] 불 뿜기',
    0,
    '[공격] 꼬리 휘두르기',
    0,
];

// 마왕 체력
let LuciferHP = 100;

// 마왕이 쓰러졌는지 확인하는 변수
let isLuciferAlive = true;

// dice 배열에서 랜덤하게 값을 가져오는 함수
function getAttackDamage() {
    let diceNum = Math.floor(Math.random() * dice.length)
    return dice[diceNum]
}
// console.log(getAttackDamage())
// 마왕과의 대결: 마왕의 패턴에 따라 공격하는 함수를 작성해주세요.
LuciferHP = pattern.reduce((p,v,i)=>{
    let damege = getAttackDamage();
    p = v===0 ? p - damege : p;
    return p > 0 ? p : 0
},LuciferHP);
// reduce() 함수에 의해 반환된 LuciferHP가 0보다 작으면 isLuciferAlive를 false로 설정해주세요.
isLuciferAlive = LuciferHP > 0;
console.log(`남은 HP : ${LuciferHP}`)
// 마왕을 쓰러뜨렸는지 확인하는 코드
if (isLuciferAlive) {
    console.log('박오즈는 보물에 생을 바쳤다.');
} else {
    console.log('박오즈는 강했다.');
}
