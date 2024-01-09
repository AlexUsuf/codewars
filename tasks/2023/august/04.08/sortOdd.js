function sortArray(array) {
    const evenArrayElements = array.filter(item => item % 2 !== 0).sort((a,b) => a - b);;
    const res = array.map(el => {
      if(el % 2 !== 0) {
        return evenArrayElements.shift();
      }
      else{
        return el;
      }
    })
    return res;
}