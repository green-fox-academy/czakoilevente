/*
# Sharpie

 -  Create `Sharpie` class
     -  We should know about each sharpie their `color` (which should be a string), `width` (which will be a floating point number), `inkAmount` (another floating point number)
     -  When creating one, we need to specify the `color` and the `width`
     -  Every sharpie is created with a default 100 as `inkAmount`
     -  We can `use()` the sharpie objects
     -  which decreases inkAmount
      */

'use strict'

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;


constructor (colorIN, widthIN, inkAmountIN = 100){
  this.color=colorIN;
  this.width=widthIN;
  this.inkAmount=inkAmountIN;
};

  use(){
   this.inkAmount -= 1;
  };

};

const ABC = new Sharpie('blue',4);

console.log(ABC)
