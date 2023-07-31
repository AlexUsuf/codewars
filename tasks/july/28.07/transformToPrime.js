function minimumNumber(numbers){
    let counter = 0;
    while(!isPrime(sumArray(numbers))) {
      counter += 1;
      numbers.push(1);
    }
    return counter;
  }
  
  
  function isPrime(n) {
    const root = n ** 0.5;
    for(let i = 2; i <= root; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }
  
  function sumArray(arr) {
    return arr.reduce((a,b) => a + b, 0)
  }

  module.exports = minimumNumber;