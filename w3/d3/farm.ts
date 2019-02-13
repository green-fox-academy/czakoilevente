class Animal {

  hunger: number;
  thirst: number;

  constructor(hungerIN = 50, thirstIN = 50) {
    this.hunger = hungerIN;
    this.thirst = thirstIN;
  };

  eat(dog) {
    this.hunger -= 1;
    dog.hunger -= 2;
  }

  drink() {
    this.thirst = this.thirst - 1;
  };

  play() {
    this.thirst += 1;
    this.hunger += 1;
  };
};

class Farm {
  listOfAnimals: Animal[] = [];
  slotForAnimals: number = 10;

  constructor() {
    
  };

  breed(): void {
    if (this.listOfAnimals.length < this.slotForAnimals) {
      let animal = new Animal();
      this.addAnimal(animal);
      console.log('Animal Added!');
    } else {
      console.log('Cannot ADD more Animals. Farm capacity is full!');
    };
  };

  private addAnimal(oneAnimal: Animal): void {
    if (this.listOfAnimals.length < this.slotForAnimals) {
      this.listOfAnimals.push(oneAnimal)
    } else {
      console.log('Not gonna woooork! ;)')
    };
  };

  slaughter(): void {
    this.listOfAnimals.sort((a: Animal, b: Animal): number => a.hunger - b.hunger);
    this.removeAnimal();
  };

  private removeAnimal(): void {
    if (this.listOfAnimals.length > 0) {
      this.listOfAnimals.pop();
      (console.log('One more less animal.'))
    } else {
      console.log('No more animals to remove. Farm is empty!')
    }
  };
};


let myFirtsFarm = new Farm();

for (let i: number = 0; i < 12; i++) {
  myFirtsFarm.breed();
};


console.log('------------- testing remove method ----------')

console.log(`Number of animals on the farm: ${myFirtsFarm.listOfAnimals.length}`)

for (let i: number = 1; i < 13; i++) {
  myFirtsFarm.slaughter();
};

console.log(`Number of animals on the farm: ${myFirtsFarm.listOfAnimals.length}`)