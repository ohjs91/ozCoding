// ✅ console.log 내에 존재하는 변수를 사용하여 값을 할당해주세요.
// 🚀 실습 1: 중첩 배열 구조분해할당
const coordinates = [
    [1, 2],
    [3, 4],
    [5, [6, 7]],
];

// 첫 번째 좌표의 x, y값과 3번째 두번쨰 좌표 [6,7] 추출하세요.
const [[x1,y1], [x2,y2], [x3,thirdCoord]] = coordinates;

// ✨ 결과 확인
console.log('첫 번째 좌표:', x1, y1);
console.log('세 번째 두번째 좌표:', thirdCoord);
console.log('------------------------------------------');

// 세 번째 좌표의 중첩된 두 번째 값(7)을 추출하세요.
const [,, [a, [b, nestedValue]]] = coordinates;
console.log('중첩된 값:', nestedValue); // 7
console.log('------------------------------------------');

// 🚀 실습 2: 중첩 객체 구조분해할당
const company = {
    name: '테크컴퍼니',
    location: {
        country: '한국',
        city: '서울',
        address: {
        street: '테헤란로',
        zipCode: '12345',
        },
    },
    employees: {
        development: {
            frontend: ['김개발', '이프론트'],
            backend: ['박서버', '최디비'],
        },
        design: ['정디자인'],
    },
};

// 회사 위치 정보 추출하세요. (서울 테헤란로)
const {location:{city,address:{street}}} = company;

// ✨ 결과 확인
console.log('회사 위치:', city, street);
console.log('------------------------------------------');

// 첫번째 프론트엔드 개발자와 백엔드 개발자 모두를 추출하세요.
const {employees:{development:{frontend:[firstFrontend],backend}}} = company;

// ✨ 결과 확인
console.log('첫 번째 프론트엔드 개발자:', firstFrontend);
console.log('백엔드 개발자들:', backend);
console.log('------------------------------------------');
// 🚀 실습 3: 배열과 객체가 혼합된 구조
const schoolData = {
    name: '한국고등학교',
    classes: [
        {
            name: '1반',
            students: [
                { id: 1, name: '김학생' },
                { id: 2, name: '이학생' },
            ],
        },
        {
            name: '2반',
            students: [
                { id: 3, name: '박학생' },
                { id: 4, name: '최학생' },
            ],
        },
    ],
};

// 1반의 첫 번째 학생 정보(id, name) 추출하세요.
const {classes:[{students:[firstStudent]}]} = schoolData;

// ✨ 결과 확인
console.log('1반 첫 번째 학생:', firstStudent);
console.log('------------------------------------------');
// 2반의 모든 학생의 정보(id, name)를 추출하세요.
const {classes:[,{students:secondClassStudents}]} = schoolData;

// ✨ 결과 확인
console.log('2반 학생들:', secondClassStudents);
console.log('------------------------------------------');
