module.exports = function reverse (n) {
  let result = '';
  n = Math.abs(n);
  n = n.toString()
  for(let i = n.length - 1; i >= 0; i--){
    result += n[i];
  }
  return result;
}
