// Субъект (Subject)
class NewsPublisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
    }

    notify(news) {
        this.subscribers.forEach(subscriber => subscriber.update(news));
    }
}

// Наблюдатель (Observer)
class NewsSubscriber {
    constructor(name) {
        this.name = name;
    }

    update(news) {
        console.log(`${this.name} received news: ${news}`);
    }
}

// Использование
const publisher = new NewsPublisher();

const subscriberA = new NewsSubscriber("Subscriber A");
const subscriberB = new NewsSubscriber("Subscriber B");
const subscriberC = new NewsSubscriber("Subscriber C");

publisher.subscribe(subscriberA);
publisher.subscribe(subscriberB);
publisher.subscribe(subscriberC);

publisher.notify("Important news!"); // Каждый наблюдатель получит уведомление
