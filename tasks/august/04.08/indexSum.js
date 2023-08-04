function findEvenIndex(arr) {
    let leftSum = 0;
    let rightSum = sumArray(arr);
    for(let i = 0; i < arr.length; i++) {
      rightSum -= arr[i];
      if(rightSum === leftSum) {
        return i;
      }
      leftSum += arr[i];
    }
    return -1;
  }
  
  function sumArray(array) {
    return array.reduce((a,b) => a + b, 0);
  }

  module.exports = findEvenIndex;