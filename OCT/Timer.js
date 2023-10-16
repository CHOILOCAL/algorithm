// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

setTimeout(() => {
    console.log('CHOILOCAL')
}, 3000)

// const timer = setTimeout(() => {
//     console.log('CHOILOCAL2')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearTimeout(timer)
// })

const timer = setInterval(() => {
    console.log('CHOILOCAL3')
}, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearInterval(timer)
// })