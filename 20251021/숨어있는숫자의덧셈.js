// '50'	isNaN('50') -> false  '50'은 (문자지만) 숫자로 바꿀 수 있어.
const my_string = "1a2b3c4d123";

function solution(my_string) {
    const newArr = my_string.split("").filter(v => !isNaN(v) && v)
    const answer = newArr.reduce((p,v) => {
        return p + Number(v)
    } ,0)
    return answer;
}

console.log(solution(my_string))