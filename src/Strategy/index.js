class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}

class Strategy {
    execute() {}
}

class ConcreteStrategyA extends Strategy {
    execute() {
        // ...
    }
}

class ConcreteStrategyB extends Strategy {
    execute() {
        // ...
    }
}

const context = new Context(new ConcreteStrategyA());
context.executeStrategy();

context.strategy = new ConcreteStrategyB();
context.executeStrategy();
