function addBinary(a, b) {
  let resultArr = [];
  let aArr = a.split("").reverse();
  let bArr = b.split("").reverse();

  let carryOver = 0;

  for (
    let i = 0, j = 0;
    i < aArr.length || j < bArr.length || carryOver > 0;
    i++, j++
  ) {
    let sum = (parseInt(aArr[i]) || 0) + (parseInt(bArr[j]) || 0) + carryOver;

    if (sum > 1) {
      console.log("i is: -> ", i);

      resultArr[i] = sum % 2;
      carryOver = 1;
      console.log("      resultArr[i]", resultArr[i]);
      console.log("      resultArr", resultArr);
    } else {
      console.log("i less sum is: -> ", i);

      resultArr[i] = sum;
      carryOver = 0;
    }
  }

  return resultArr.reverse().join("");
}

console.log(addBinary("11", "1"));
