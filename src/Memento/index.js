class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
}

class Originator {
    constructor(state) {
        this.state = state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    restoreMemento(memento) {
        this.state = memento.getState();
    }
}

class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}

const originator = new Originator('initial');
const caretaker = new Caretaker();

caretaker.addMemento(originator.createMemento());

originator.state = 'modified';

caretaker.addMemento(originator.createMemento());

originator.restoreMemento(caretaker.getMemento(0));
console.log(originator.state); // Вывод: initial

originator.restoreMemento(caretaker.getMemento(1));
console.log(originator.state); // Вывод: modified
