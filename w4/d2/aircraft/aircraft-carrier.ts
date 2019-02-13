
abstract class Aircraft {
  totalDamage: number;
  maxAmmo: number;
  baseDamage: number;
  currentAmmo: number;
  damage: number;
  priority: boolean;

  constructor(maxAmmoIN: number, baseDamageIN: number, currentAmmoIN: number = 0) {
    this.maxAmmo = maxAmmoIN;
    this.baseDamage = baseDamageIN;
    this.currentAmmo = currentAmmoIN;
    this.damage = baseDamageIN * currentAmmoIN;
  };

  fight(): number {
    return this.damage;
  };

  refill(ammoFilled: number): number {
    let ammoTemp: number = this.currentAmmo + ammoFilled;
    this.currentAmmo = ammoTemp;
    if (this.currentAmmo > this.maxAmmo) {
      this.currentAmmo = this.maxAmmo;
    };
    return ammoTemp - this.currentAmmo;
    
  };

  abstract getType(): string;

  abstract getStatus(): string;

  abstract isPriority(): boolean;

};

class F16 extends Aircraft {

  constructor(maxAmmoIN: number = 8, baseDamageIN: number = 30, priorityIN: boolean = false) {
    super(maxAmmoIN, baseDamageIN);
    this.baseDamage = baseDamageIN;
    this.maxAmmo = maxAmmoIN;
    this.priority = priorityIN;
  };

  getType(): string {
    return 'F16';
  };
  isPriority(): boolean {
    return this.priority;
  };
  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.totalDamage}`;
  };
};


class F35 extends Aircraft {

  constructor(maxAmmoIN: number = 12, baseDamageIN: number = 50, currentAmmoIN: number = 0, priorityIN: boolean = true) {
    super(maxAmmoIN, baseDamageIN);
    this.baseDamage = baseDamageIN;
    this.maxAmmo = maxAmmoIN;
    this.priority = priorityIN;
  };

  getType(): string {
    return 'F35';
  };

  isPriority(): boolean {
    return this.priority;
  };
  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.totalDamage}`;
  };
};


class Carrier {

  listOfAircrafts: Aircraft[] = [];
  carrierAmmoStorage: number;
  healthPointCarrier: number;
  totalCarrierDamage: number;

  constructor(healthPointCarrierIN: number = 2000, carrierAmmoIN: number = 2000) {
    this.healthPointCarrier = healthPointCarrierIN;
    this.carrierAmmoStorage = carrierAmmoIN;
  };

  createAircraftF16(): void {
    let newAircraft = new F16();
  };

  createAircraftF35(): void {
    let newAircraft = new F35;
  }

  add(newAircraft: Aircraft): void {
    this.listOfAircrafts.push(newAircraft);
  };

  fill(someAircraft: Aircraft): void {
    if (this.carrierAmmoStorage < someAircraft.currentAmmo) {
      someAircraft.priority = true;
      someAircraft.refill(someAircraft.maxAmmo);
      this.carrierAmmoStorage -= someAircraft.maxAmmo;
    } else {
      console.log('This Carrier\'s ammo storage has run dry. RUN FOR YOUR LIVES!')
    };
  };

  refillAllBirds(): void {
    
    this.listOfAircrafts.forEach((oneAircraft: Aircraft) => oneAircraft.refill(50));
    //this.listOfAircrafts.forEach((oneAircraft: Aircraft) => oneAircraft.totalDamage = ));
    
    this.totalCarrierDamage = this.totalBaseDamage() * this.totalAircraftAmmo();
  }; 

  private totalBaseDamage(): number {
    return this.listOfAircrafts.reduce((accumulator: number, oneAircraft: Aircraft): number => accumulator + oneAircraft.baseDamage, 0);
  };

  private totalAircraftAmmo(): number {
    return this.listOfAircrafts.reduce((accumulator: number, oneAircraft: Aircraft): number => accumulator + oneAircraft.currentAmmo, 0)
  };

  fight(anotherCarrier: Carrier): void {
    //total damage of a carrier
    /* 
    how many f16s and f35-s are on the carrier
    reduce -> add total basedamage
    */
  };

  getStatus(): void {

    console.log(`HP: ${this.healthPointCarrier}, Aircraft count: ${this.listOfAircrafts.length}, Ammo storage: ${this.carrierAmmoStorage}, Total damage: ${this.totalCarrierDamage}`);
    console.log('Aircrafts:');

    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      console.log(this.listOfAircrafts[i].getStatus());
    };

    if (this.healthPointCarrier <= 0) {
      console.log('It\'s dead Jim :(');
    };
  };
};

function testMyCarrier() {
  let myCarrier1 = new Carrier();

  for (let i: number = 0; i < 1; i++) {
    let brandNewF35 = new F35();
    myCarrier1.add(brandNewF35);
    let brandNewF16 = new F16();
    myCarrier1.add(brandNewF16);
  };

  myCarrier1.refillAllBirds();
  console.log('---------------------------------------------------------------');
  console.log(myCarrier1.totalCarrierDamage);
  console.log('---------------------------------------------------------------');
  myCarrier1.getStatus();
};

testMyCarrier();