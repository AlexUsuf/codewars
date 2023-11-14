function scoreboard(string) {
    if(typeof string !== 'string'){
        return 'Error type';
    }
    const score = string.split(' ').slice(-2);
    const obj = {
      'nil': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9
    }
    return [obj[score[0]], obj[score[1]]];
  }
  module.exports = scoreboard;