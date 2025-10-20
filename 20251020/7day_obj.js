const user = {
    name: "김코딩",
    sayHello: function () {
        console.log(`안녕하세요! 저는 ${this.name}입니다.`);
    }
};

user.sayHello(); 
console.log('----------------------------');

//ES6의 축약법
const person = {
    name: "홍길동",
    greet() {
        console.log(`저는 ${this.name}입니다.`);
    }
};
person.greet(); 
console.log('----------------------------');

const car = {
    brand: "현대"
};

car.start = function () {
    console.log(`${this.brand} 자동차가 출발합니다.`);
};
car.start(); 
console.log('----------------------------');

// 화살표 함수로 하면?
const dog = {
    name: "바둑이",
    bark: () => {
        console.log(`저는 ${this.name}입니다.`);
    }
};

dog.bark(); // "저는 undefined입니다." 
console.log('----------------------------');