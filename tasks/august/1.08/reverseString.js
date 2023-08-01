function reverseString(string) {
    const array = [...string];
    let reverse = '';
    while (array.length) {
        reverse += array.pop();
    }
    return reverse;
}

module.exports = reverseString;