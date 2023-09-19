function solution(my_string) {
    // 맨 뒤에 공백이 있을 수도 있기 때문에 filter 체인 
    return my_string.split(' ').filter(a => a !== '')

}