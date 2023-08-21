class Prototype {
    clone() {}
}

class ConcretePrototype extends Prototype {
    constructor(state) {
        super();
        this.state = state;
    }

    clone() {
        return new ConcretePrototype(this.state);
    }
}

const prototype = new ConcretePrototype('initial');
const clone = prototype.clone();

console.log(clone.state); // Вывод: initial
