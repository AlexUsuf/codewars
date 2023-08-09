function sumConsecutives(s) {
    const result = [];
    let element = 0;
    for(let i = 0; i < s.length; i++) {
      element += s[i];
      if(s[i] !== s[i + 1]) {
        result.push(element);
        element = 0;
      }
    }
    return result;
}