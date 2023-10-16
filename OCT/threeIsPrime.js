function solution(nums) {
    var answer = 0;
    var sum = 0;
     
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}

function isPrime(num) {
	if(num === 1) return false; //1은 소수가 아니다.
    
 	for(let i = 2; i < num; i++) {
  		if(num % i === 0) {
            return false;
        }
        //num이 다른 수로 나눠떨어진다면 소수가 아니다.
	}
    
    return true; //반복문을 종료할때까지 if문이 실행되지 않았다면 소수이다.
}