'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
    let a = reversed.split("")
    let b = a.reverse()
     reversed = b.join("")


console.log(reversed);

// export = reversed;

// --------------------

let stringToReverse = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverting (x) {
    return x.split("").reverse().join("")
}

console.log(reverting(stringToReverse))