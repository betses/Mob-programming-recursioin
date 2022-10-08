function sum(number) {
  // write your code here
  if (number > 0) {
    return number + sum(number - 1)

  } else {
    return 0
  }

}

console.log(sum(4))
console.log(sum(10))

module.exports = sum;