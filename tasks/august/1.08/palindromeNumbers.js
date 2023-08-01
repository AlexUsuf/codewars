function convertPalindromes(numbers) {
    const result = [];
    for(const x of numbers) {
      if(isPalindrome(x)) {
        result.push(1);
      }
      else{
        result.push(0);
      }
    }
    return result;
  };
  
  const isPalindrome = char => {
    const arr = [...String(char)];
    let reverse = '';
    
    while(arr.length) {
      reverse += arr.pop();
    }
    return String(char) === reverse;
  }

  
module.exports = convertPalindromes;