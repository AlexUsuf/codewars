function deleteDuplication(array) {
    return array.filter((item, index) => {
        return array.indexOf(item) === index;
    });
}

module.exports = deleteDuplication;