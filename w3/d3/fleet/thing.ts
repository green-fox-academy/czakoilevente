class Thing {
  private name: string;
  private completed: boolean;

  constructor(nameIN: string){
      this.name = nameIN;
  }

  public complete() {
      this.completed = true;
  }
  getName(){
      return this.name;
  };

  checkbox(){
    if (this.completed===true){
        return '[X]';
    } else {
        return '[ ]';
    };
  };

}



export { Thing };
