// 🚀 실습 1: 기본 객체 구조분해할당
const student = {
    id: '1',
    name: '홍길동',
    scores: {
        math: 90,
        english: 85,
        science: 95,
    },
};

// student 객체에서 id와 name을 구조분해할당으로 가져오기
const {id, name} = student;

//✨ 결과 확인
console.log('학생 정보:', id, name);
console.log('------------------------------------------');

// 🚀 실습 2: 중첩 객체 구조분해할당
// scores 객체 안의 math와 english 점수만 가져오기
const {scores:{math,english}} = student;

//✨ 결과 확인
console.log('수학점수:', math);
console.log('영어점수:', english);
console.log('------------------------------------------');

// 🚀 실습 3: 새로운 변수명으로 할당하기
const product = {
    id: 'P001',
    name: '노트북',
    price: 1200000,
};

// name을 productName라는 새로운 변수명으로 할당
// price를 productPrice라는 새로운 변수명으로 할당
const {name:productName,price:productPrice} = product;

//✨ 결과 확인
console.log('제품 가격:', productPrice);
console.log('제품명:', productName);
console.log('------------------------------------------');

// 🚀 실습 4: 기본값과 함께 사용하기
const config = {
    theme: 'dark',
    fontSize: 14,
};

// 존재하지 않는 프로퍼티에 기본값 설정하기 language, timeout)
const {theme,fontSize,language='ko', timeout=1000} = config;

//✨ 결과 확인
console.log('설정값:', theme, fontSize, language, timeout);
console.log('------------------------------------------');
