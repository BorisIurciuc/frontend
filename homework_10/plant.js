class Plant {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }
    grow() {
        this.height = this.height + 10;
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers){
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}
const rose = new Rose(15, 3, 36);
rose.grow();

console.log(rose);
