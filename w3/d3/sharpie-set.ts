'use strict';

import { Sharpie } from './sharpie';

class SharpieSet {
  listOfSharpie: Sharpie[] = [];

  countUsable(): void {
    this.listOfSharpie.forEach(function (oneSharpie: Sharpie) {
      if (oneSharpie.inkAmount > 0) {
        oneSharpie.usable = true;
        console.log('Sharpie is usable!')
      } else {
        oneSharpie.usable = false;
        console.log('Sharpie is NOT usable!')
      };
    });
  };

  countUsableSharpie(oneSharpie: Sharpie): void {
    if (oneSharpie.inkAmount > 0) {
      oneSharpie.usable = true;
      console.log('Sharpie is usable!')
    } else {
      oneSharpie.usable = false;
      console.log('Sharpie is NOT usable!')
    };
  };

  removeTrash(): void {
    let filteredSharpie = this.listOfSharpie.filter(function (oneSharpie: Sharpie) {
      return oneSharpie.usable
    });
    /* this.listOfSharpie.forEach(function (oneSharpie: Sharpie): void {      //foreach + splice = (a splice kiveszi az elemet, a foreach-ben marad az index szám. )
        if (oneSharpie.usable === false) {
    this.listOfSharpie.splice(this.listOfSharpie.indexOf(oneSharpie), 1);
  };
}); */
    console.log(`Trash removed:  ${this.listOfSharpie.length - filteredSharpie.length}!`);
    this.listOfSharpie = filteredSharpie;
  };

  addSharpie(oneSharpie: Sharpie): void {
    this.listOfSharpie.push(oneSharpie);
  };
};

const mySharpieSet = new SharpieSet();

for (let i: number = 0; i < 10; i++) {
  let newSharpie = new Sharpie();
  mySharpieSet.addSharpie(newSharpie);
};

let falseSharpie = new Sharpie(false);
//mySharpieSet.addSharpie(falseSharpie);

console.log('testing sharpies');
console.log(mySharpieSet);

console.log('---------------');
console.log('testing method');

mySharpieSet.removeTrash();
//mySharpieSet.countUsable();
//setSharpie(newSharpie2);

console.log(mySharpieSet.listOfSharpie);