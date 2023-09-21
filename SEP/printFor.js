function solution(start_num, end_num) {
    var answer = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(i)
    }
    return answer;
}

function solution(start_num, end_num) {
    return Array(end_num - start_num + 1).fill(start_num).map((x, idx) => x + idx);
}