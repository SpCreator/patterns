class Receiver {
    action() {
        // ...
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() {
        this.receiver.action();
    }
}

class Invoker {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        for (const command of this.commands) {
            command.execute();
        }
    }
}

const receiver = new Receiver();
const command1 = new Command(receiver);
const command2 = new Command(receiver);

const invoker = new Invoker();
invoker.addCommand(command1);
invoker.addCommand(command2);

invoker.executeCommands();
