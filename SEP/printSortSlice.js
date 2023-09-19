function solution(num_list) {
    // 오름차순 후 다섯개 자르기
    return num_list.sort((a, b) => a - b).slice(5);
}