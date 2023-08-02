function twoSum(numbers, target) {
    const result = [];
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers.length; j++){
        if(result.length === 2) {
          break;
        }
        if(numbers[i] + numbers[j] === target && i !== j) {
          result.push(i, j);
        }
      }
    }
    return result;
}

module.exports = twoSum;