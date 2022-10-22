class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
}

class EV extends Car{
    #charge = 100;
    constructor(make, speed){
        super(make, speed);
        this.chargeBattery = (chargeTo) => {
            this.#charge = chargeTo;
            return this; // to chain methods
        }

        this.accelerate = () => {
            this.speed+=20;
            this.#charge-=1;
            console.log(`${this.make} going at ${this.speed}km/h with a charge of ${this.#charge}%.`)
            return this; // to chain methods
        }
    }
}

const tesla = new EV('Tesla', 230);
tesla.chargeBattery(90);
console.log(tesla.charge)
tesla.accelerate().chargeBattery(22).accelerate();