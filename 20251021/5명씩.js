const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]

function solution(names) {
    const newArr = [];
    for(let i = 0; i < names.length; i += 5 ){
        newArr.push(names[i])
    }
    return newArr
}

console.log(solution(names))