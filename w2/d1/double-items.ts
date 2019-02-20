// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict'

let drinks : string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

console.log(drinks.map((elem:string) => elem + elem));