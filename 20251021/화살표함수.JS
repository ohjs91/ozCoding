// 함수 표현식
const hello = function(name) {
    return `안녕하세요, ${name}님!`;
}

// 화살표 함수로 변형
const helloArrow = (name) => {
    return `안녕하세요, ${name}님!`;
}
console.log(helloArrow("변우석")); // 안녕하세요, 변우석님!

// 매개변수가 하나일 때 → 괄호 생략 가능 매개변수가 없을 때 → 괄호는 생략 불가
const hello2 = name => `Hello ${name}!`;
console.log(hello2("혜리")); // Hello 혜리!

// 본문이 한 줄일 때 → return과 중괄호 생략 가능
const square = num => num * num;
console.log(square(4)); // 16

//객체를 반환할 때 → 소괄호로 감싸야 함
const getUser = () => ({ name: "김코딩", age: 29 });
console.log(getUser()); // { name: '김코딩', age: 29 }


//함수 표현식에서의 `this`
const user = {
    name: "김코딩",
    greet: function () {
        console.log(`안녕하세요! 저는 ${this.name}입니다.`);
    }
};
user.greet(); // 안녕하세요! 저는 김코딩입니다.
//일반적인 함수 표현식에서는 `this`가 **해당 메서드를 호출한 객체(user)**를 가리킵니다.
//즉, `user.greet()`에서의 `this`는 `user`를 참조합니다.

//화살표 함수에서의 this
const user2 = {
    name: "김코딩",
    greet: () => {
        console.log(`안녕하세요! 저는 ${this.name}입니다.`);
    }
};
user2.greet(); // 안녕하세요! 저는 undefined입니다. ❗



