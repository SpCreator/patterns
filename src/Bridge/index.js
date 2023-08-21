class Abstraction {
    constructor(implementation) {
        this.implementation = implementation;
    }

    operation() {
        this.implementation.operationImplementation();
    }
}

class ConcreteAbstraction extends Abstraction {
    operation() {
        super.operation();
        // Дополнительная логика
    }
}

class Implementation {
    operationImplementation() {}
}

class ConcreteImplementationA extends Implementation {
    operationImplementation() {
        // ...
    }
}

class ConcreteImplementationB extends Implementation {
    operationImplementation() {
        // ...
    }
}

const implementationA = new ConcreteImplementationA();
const abstractionA = new ConcreteAbstraction(implementationA);
abstractionA.operation();

const implementationB = new ConcreteImplementationB();
const abstractionB = new ConcreteAbstraction(implementationB);
abstractionB.operation();
