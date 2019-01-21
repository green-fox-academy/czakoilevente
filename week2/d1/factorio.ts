// -  Create a function called `factorio`
//    that returns it's input's factorial

let inNumber: number = 4

function factorio(x: number) {
    let result = 1;
    for (let i :number = 1; i <= x; i++) {
    result = result * i;
    }
    return result
}

console.log(factorio(inNumber))