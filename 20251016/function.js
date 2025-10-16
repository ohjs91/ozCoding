function test(){
    console.log(this)
    console.log("function")
}
test();

const test1 = () => {
    console.log(this)
    console.log("arr function")
}
test1();

const test2 = () => console.log("test2 function"); // 리턴이 없어도 리턴함



// 차이점 
// 호이스팅 arr function 은 호이스팅이 안됨 
// this 의 바인딩이 다름