function solution(n) {
    const gcd = GCD(6, n);
    var answer = n / gcd; 
    return answer;
}
//유클리드 호제법
function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(solution(10))

10 / 6