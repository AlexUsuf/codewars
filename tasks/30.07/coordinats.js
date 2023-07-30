const xMarksTheSpot = (input) => {
    let res = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].includes('x')) {
        res.push(i);
      }
      for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] === 'x') {
          res.push(j);
        }
      }
    }
    if(res.length === 2) {
      return res;
    }
    return [];
  }

  module.exports = xMarksTheSpot;