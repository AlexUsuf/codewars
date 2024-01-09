function spinWords(string){
    const array = string.split(' ');
    let result = [];
    for(const x of array) {
      if(x.length > 4) {
        result.push(x.split('').reverse().join(''))
      }
      else{
        result.push(x);
      }
    }
    return result.join(' ')
  }

  module.exports = spinWords;