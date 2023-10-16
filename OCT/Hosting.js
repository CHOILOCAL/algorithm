// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7;

double();

// 아직 함수가 만들어지지 않아서 실행 되지 않음
// const double = function() {
//     console.log(a * 2);
// }

// 자바스크립트 실행 동시 만들어지는 함수
function double() {
    console.log(a * 2);
}