function solution(num_list, n) {
    var answer = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (i >= n) {
            break;
        } else {
            answer.push(num_list[i]);
        }
    }
    
    return answer;
}