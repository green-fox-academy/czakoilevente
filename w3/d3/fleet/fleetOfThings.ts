import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:

1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch

// Hint: You have to create a `print()` method as well */

//console.log(fleet+'after init')

let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat lunch');
//console.log(fleet+'declared array elements')

thing3.complete();
thing4.complete();
//console.log(fleet+'added array element's 2nd property using method/function because access modifier is private')

fleet.add(thing1);   // fleet.things = [ Thing {name: 'Get milk'}]
fleet.add(thing2);   // fleet.things = [ thing1, thing2]
fleet.add(thing3);   // fleet.things = [ thing1, thing2, thing3]
fleet.add(thing4);   // fleet.things = [ thing1, thing2, thing3, thing4]

//console.log(fleet + 'added array elements to fleet object's things array');


for (let i = 0; i < fleet.getThings().length; i++) {
  console.log( (i+1 + '. ') + fleet.getThings()[i].checkbox() + ' ' + fleet.getThings()[i].getName());
};
