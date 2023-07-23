function getMiddle(s) {
    const lengthReturn = Math.floor(s.length / 2);
    if(s.length % 2 !== 0) {
      return s[lengthReturn];
    }
    else {
      return s[lengthReturn - 1] + s[lengthReturn];
    }
  }

  module.exports = getMiddle;