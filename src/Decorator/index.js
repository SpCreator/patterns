class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1;
    }
}

let coffee = new Coffee();
console.log(coffee.cost()); // Output: 5

coffee = new MilkDecorator(coffee);
console.log(coffee.cost()); // Output: 7

coffee = new SugarDecorator(coffee);
console.log(coffee.cost()); // Output: 8
