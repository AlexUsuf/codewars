function dup(s) {
    return s.map(item => item.replace(/(.)\1+/g, '$1'))
}