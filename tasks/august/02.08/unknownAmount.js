function missNumsFinder(arr) {
    const result = [];
    const copyArr = Array.from(arr);
    const sortArray = copyArr.sort((a,b) => a - b);
    if(sortArray[0] !== 1) {
      return [1];
    }
    for(let i = 0; i < sortArray.length - 1; i++) {
      if(sortArray[i] - sortArray[i + 1] !== -1) {
        result.push(sortArray[i] + 1);
        sortArray.push(sortArray[i] + 1);
        sortingArr(sortArray);
      }
    }
    return result;
  }
  
  function sortingArr(arr) {
    return arr.sort((a,b) => a - b);
}

module.exports = missNumsFinder;
  