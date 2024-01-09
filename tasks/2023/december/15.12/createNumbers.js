function createPhoneNumber(numbers) {
    if(numbers === undefined || numbers === null) {
        return false;
    }
    let result = "(xxx) xxx-xxxx";

    numbers.map(el => result = result.replace('x', el));
    return result;
}

module.exports = createPhoneNumber;