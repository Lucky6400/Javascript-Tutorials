function solution(number){
    let sum = [];
    for(let i = 1; i < number; i++){
      if(i%3 === 0 || i%5 === 0){
        sum.push(i)
      }
    }
    return sum
  }

console.log(solution(10))