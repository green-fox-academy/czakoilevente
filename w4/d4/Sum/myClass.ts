/* Sum
Create a sum method in your class which has a list of
integers as parameter.
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empyt list
a list that has one element in it
a list that has multiple elements in it
a null
with a string
Run them
Fix your code if needed */

//SOLUTION OF TASK STARTS FROM HERE (above part is only for self guide)

export class MyClass {
  list: number[];

  sum(listIN: number[]): number {
    return listIN.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
};

