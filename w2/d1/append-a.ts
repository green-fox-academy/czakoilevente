// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];

/* function addElement(oneArray: string[]): string[] {
  for (let i: number = 0; i < oneArray.length; i++) {
    return oneArray.concat();
  };
} */

console.log(animals.map((element: string) => element + "a"));