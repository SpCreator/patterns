class Context {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle();
    }
}

class State {
    handle() {}
}

class ConcreteStateA extends State {
    handle() {
        // ...
    }
}

class ConcreteStateB extends State {
    handle() {
        // ...
    }
}

const context = new Context(new ConcreteStateA());
context.request();

context.setState(new ConcreteStateB());
context.request();
