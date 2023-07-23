function accum(s) {
	let res = s[0]+'-';
  for(let i = 1; i < s.length; i++) {
    res += `${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}-`;
  }
  return res.slice(0, -1);
}

module.exports = accum;