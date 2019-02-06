/*
We start with a base, abstract class Instrument.

it reserves (e.g. protected) the name of the instrument
it should provide a play() method.
Next, we add another abstract class, StringedInstrument which extends Instrument. It

introduces numberOfStrings and
sound() method what's implementation is yet unknown
but with the help of the sound() the play() method is fully implementable
*/

abstract class Instrument {
  protected name: string;

  abstract play();
}; 

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  abstract sound();  
};


class ElectricGuitar extends StringedInstrument{

  play(){};
  sound(){};
  
  constructor(stringsIN, playIN){
    super()
    this.numberOfStrings=stringsIN;
    
  };
};

let guitar = new ElectricGuitar;



