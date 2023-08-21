class EventBus {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventType, listener) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    publish(eventType, data) {
        if (this.listeners[eventType]) {
            for (const listener of this.listeners[eventType]) {
                listener(data);
            }
        }
    }
}

const eventBus = new EventBus();

function onMessageReceived(message) {
    console.log(`Received message: ${message}`);
}

eventBus.subscribe('message', onMessageReceived);
eventBus.publish('message', 'Hello, world!');
