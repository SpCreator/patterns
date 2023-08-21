class Mediator {
    notify(sender, event) {}
}

class ConcreteMediator extends Mediator {
    constructor(colleague1, colleague2) {
        super();
        this.colleague1 = colleague1;
        this.colleague2 = colleague2;
    }

    notify(sender, event) {
        if (sender === this.colleague1) {
            this.colleague2.handleEvent(event);
        } else if (sender === this.colleague2) {
            this.colleague1.handleEvent(event);
        }
    }
}

class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(event) {
        this.mediator.notify(this, event);
    }

    handleEvent(event) {}
}

class ConcreteColleague1 extends Colleague {
    handleEvent(event) {
        // ...
    }
}

class ConcreteColleague2 extends Colleague {
    handleEvent(event) {
        // ...
    }
}

const colleague1 = new ConcreteColleague1();
const colleague2 = new ConcreteColleague2();
const mediator = new ConcreteMediator(colleague1, colleague2);

colleague1.send('Event 1');
colleague2.send('Event 2');
