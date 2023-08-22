function DNAStrand(dna) {
    let res = '';
    if(!dna) {
        return res;
    }
    const obj = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    }
    
    for (const x of dna) {
        res += obj[x];
    }
    return res;
}

module.exports = DNAStrand;