class OldSystem {
    request(data) {
        // ...
    }
}

class NewSystem {
    process(data) {
        // ...
    }
}

class Adapter {
    constructor(newSystem) {
        this.newSystem = newSystem;
    }

    request(data) {
        this.newSystem.process(data);
    }
}

const oldSystem = new OldSystem();
const newSystem = new NewSystem();
const adapter = new Adapter(newSystem);

adapter.request(someData);
