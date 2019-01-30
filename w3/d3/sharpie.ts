
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
