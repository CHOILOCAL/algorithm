// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(cb) {
    setTimeout(() => {
        console.log('CHOILOCAL');
        // console.log('Done!');
        cb() // 매개변수가 들어옴, 실행 보장
    }, 3000)
}

// 매개변수 생성
timeout(() => {
    console.log('Done!')
});