import { Thing } from "./thing";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thingy: Thing) {
    this.things.push(thingy);
  }

  getThings(){
    return this.things;
  };

  /* print(){
   console.log() 
  }; */
}

export { Fleet };

