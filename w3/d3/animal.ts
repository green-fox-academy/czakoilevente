/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value

Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */


class Animal {

  hunger: number;
  thirst: number;

  constructor(hungerIN = 50, thirstIN = 50) {
    this.hunger = hungerIN;
    this.thirst = thirstIN;
  };

  eat() : void {
    this.hunger -= 1;
    dog.hunger -= 2;
  }

  drink() :void {
    this.thirst = this.thirst - 1;
  };

  play() :void {
    this.thirst += 1;
    this.hunger +=1;
  };
};

const dog = new Animal;
const cat = new Animal;
cat.eat

