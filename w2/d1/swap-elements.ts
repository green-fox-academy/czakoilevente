// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"]

let frontmin = abc.shift()
let backmin = abc.pop()

abc.push(frontmin)
abc.unshift(backmin)

console.log(abc)

