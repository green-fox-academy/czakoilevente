'use strict';

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
    this.totalDamage = this.currentAmmo * this.baseDamage;
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

  constructor(healthPointCarrierIN: number = 2000, carrierAmmoIN: number = 20000) {
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

  totalAmmoRequiredForFill(): number {
    let allCurrAmmo = this.listOfAircrafts.reduce((accumulator: number, oneAircraft: Aircraft): number => {
      return accumulator + oneAircraft.currentAmmo;
    }, 0);
    let allRequiredAmmoForFill = this.listOfAircrafts.reduce((accumulator: number, oneAircraft: Aircraft): number => {
      return accumulator + oneAircraft.maxAmmo;
    }, 0);
    return allRequiredAmmoForFill - allCurrAmmo;
  };

  fill(): void {
    /* 
    this.listOfAircrafts.forEach((aircraft: Aircraft) => {
      if (aircraft.priority === true) {
        this.carrierAmmoStorage = aircraft.refill(this.carrierAmmoStorage)
      };
    });
    this.listOfAircrafts.forEach((aircraft: Aircraft) => {
      if (aircraft.priority === false) {
        this.carrierAmmoStorage = aircraft.refill(this.carrierAmmoStorage)
      };
    });
    */  

    if (this.carrierAmmoStorage === 0) {
      throw 'No ammo !';
    };

    if (this.totalAmmoRequiredForFill() > this.carrierAmmoStorage) {
      this.listOfAircrafts.sort((a: Aircraft, b: Aircraft) => {
        if (a.priority === true && b.priority === false) return -1;
        if (a.priority === false && b.priority === true) return 1;
        return 0;
      });
    };

    this.listOfAircrafts.forEach((oneAircraft: Aircraft): void => {
      this.carrierAmmoStorage = oneAircraft.refill(this.carrierAmmoStorage);
    });

    this.totalCarrierDamage = this.totalBaseDamage() * this.totalAircraftAmmo();
  };

  private totalBaseDamage(): number {
    return this.listOfAircrafts.reduce((accumulator: number, oneAircraft: Aircraft): number => accumulator + oneAircraft.baseDamage, 0);
  };

  private totalAircraftAmmo(): number {
    return this.listOfAircrafts.reduce((accumulator: number, oneAircraft: Aircraft): number => accumulator + oneAircraft.currentAmmo, 0)
  };

  fight(anotherCarrier: Carrier): void {
    if (anotherCarrier.healthPointCarrier - this.totalCarrierDamage > 0) {
      console.log('Good hit, but enemy still lives!');
    } else {
      console.log('E N E M Y   D E F E A T E D !');
    };
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
  let myCarrier2 = new Carrier();

  for (let i: number = 0; i < 2; i++) {
    let brandNewF35 = new F35();
    myCarrier1.add(brandNewF35);
    let brandNewF16 = new F16();
    myCarrier1.add(brandNewF16);
  };


  try {
    myCarrier1.fill();
  }
  catch(error) {
    console.error(error);
  };
  
  console.log('---------------------------------------------------------------');
  console.log(myCarrier1.totalCarrierDamage);
  console.log('---------------------------------------------------------------');
  myCarrier1.getStatus();
  console.log('---------------------------------------------------------------');

  myCarrier1.fight(myCarrier2)
};

testMyCarrier();