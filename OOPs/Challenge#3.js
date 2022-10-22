class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
}

class EV extends Car{
    constructor(make, speed, charge){
        super(make, speed);
        this.charge = charge;

        this.chargeBattery = (chargeTo) => {
            this.charge = chargeTo;
        }

        this.accelerate = () => {
            this.speed+=20;
            this.charge-=1;
            console.log(`${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%.`)
        }
    }
}

const tesla = new EV('Tesla', 230);
tesla.chargeBattery(100);
console.log(tesla.charge)
tesla.accelerate();