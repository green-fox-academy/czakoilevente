// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let numGiven = 10

function sum(x: number) {
    let result = 0;

    for(let i:number = 0; i < x; i++ ) {
        result = result + i;
    }

    return result;
}
 
const finalResult = sum(numGiven);
console.log(finalResult);
