function zeros(n) {
  // your code here  

  let sum = 0;
  let method = (n - n % 5) / 5;
  let quotients = [];

  if (n >= 5) {
    sum += method;
    quotients.push(method);
    while (method >= 5) {
      sum += (method - method % 5) / 5;
      method = (method - method % 5) / 5;
    }

    console.log(sum)
    return sum
  } else {
    return 0
  }

}

zeros(1000)
