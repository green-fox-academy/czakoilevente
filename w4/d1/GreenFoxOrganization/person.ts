class Person {
  name: string;
  age: number;
  gender: string;

  constructor(n: string, a: number, g: string) {
    this.name=n;
    this.age=a;
    this.gender=g;
  };

  introduce() :any{
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  };

  getGoal() :any {
    console.log(`My goal is: Live for the moment!`)
  };
};

export = Person;