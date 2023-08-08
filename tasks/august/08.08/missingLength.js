function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays === null || arrayOfArrays.length === 0) {
      return 0;
    }
    for(const x of arrayOfArrays){
      if(x === null || x.length === 0){
        return 0;
      }
    }
    const sortArray = [...arrayOfArrays].sort((a,b) => a.length - b.length).map(el => el.length)
    for(let i = 0; i < sortArray.length; i++) {
      if(sortArray[i + 1] - sortArray[i] !== 1) {
        return sortArray[i + 1] - 1;
      }
    }
  }

module.exports = getLengthOfMissingArray;