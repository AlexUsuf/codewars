function myLanguages(input) {
    const sortable = Object.fromEntries(
        Object.entries(input).sort((a, b) => b[1] - a[1])
    )
    const filteredValue = Object.fromEntries(
        Object.entries(sortable).filter(el => {
            if (el[1] >= 60) {
                return el[0];
            }
        })
    )
    const result = Object.keys(filteredValue);
    return result
}


module.exports = myLanguages;