class CPU {
    start() {
        console.log('CPU started');
    }
}

class Memory {
    load() {
        console.log('Memory loaded');
    }
}

class HardDrive {
    read() {
        console.log('Hard Drive read');
    }
}

class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start() {
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
        console.log('Computer started');
    }
}

const computer = new ComputerFacade();
computer.start();
// Output:
// CPU started
// Memory loaded
// Hard Drive read
// Computer started
