function addBinary(a, b) {
  let resultArr = [];
  let aArr = a.split("").reverse();
  let bArr = b.split("").reverse();
  let carryOver = 0;
  for (
    let i = 0, j = 0;
    i < aArr.length || j < bArr.length || carryOver > 0;
    i++, j++
  ) {}
  return resultArr.reverse().join("");
}
