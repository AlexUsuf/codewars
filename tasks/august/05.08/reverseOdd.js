function reverse(str){
    const array = str.split(' ');
    for(let i = 1; i < array.length; i+= 2) {
      array[i] = reverseString(array[i]);
    }
    return array.join(' ').trim();
  }
  
  
  
const reverseString = str => {
    let reverse = '';
    const arr = [...str];
    while(arr.length) {
      reverse += arr.pop();
    }
    return reverse;
  }