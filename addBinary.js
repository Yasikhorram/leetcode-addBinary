function addBinary(a, b) {
  let resultArr = [];
  let aArr = a.split("").reverse();
  let bArr = b.split("").reverse();
  let carryOver = 0;
  return resultArr.reverse().join("");
}
