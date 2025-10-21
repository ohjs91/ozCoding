const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution(numbers) {
    const sum = numbers.reduce((p,v) =>{
        p = p + v
        return p
    } ,0)
    answer = sum /numbers.length;
    return answer;
}

solution(numbers)