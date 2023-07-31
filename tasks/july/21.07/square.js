function squareDigits(num){
    let result = '';
    let string = num + '';
    for(const x of string) {
      result += Number(x) ** 2;
    }
    return +result;
  }


  module.exports = squareDigits;