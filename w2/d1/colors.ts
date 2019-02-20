// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

'use strict'

let colors = []

let greenShades: string[] = ["lime", "forest green", "olive", "pale green", "spring green"];
let redShades: string[] = ["orange red", "red", "tomato"];
let pinkShades: string[] = ["orchid", "violet", "pink", "hot pink"];

colors.push(greenShades, redShades, pinkShades);

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);