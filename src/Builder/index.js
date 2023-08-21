class Product {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }

    showParts() {
        console.log(this.parts.join(', '));
    }
}

class Builder {
    buildPartA() {}
    buildPartB() {}
    buildPartC() {}
    getResult() {}
}

class ConcreteBuilder extends Builder {
    constructor() {
        super();
        this.product = new Product();
    }

    buildPartA() {
        this.product.addPart('Part A');
    }

    buildPartB() {
        this.product.addPart('Part B');
    }

    getResult() {
        return this.product;
    }
}

class Director {
    constructor(builder) {
        this.builder = builder;
    }

    construct() {
        this.builder.buildPartA();
        this.builder.buildPartB();
    }
}

const builder = new ConcreteBuilder();
const director = new Director(builder);

director.construct();
const product = builder.getResult();
product.showParts();
