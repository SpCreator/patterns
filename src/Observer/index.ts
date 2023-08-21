// Интерфейс для наблюдателя
interface Observer {
    update(news: string): void;
}

// Субъект (Subject)
class NewsPublisher {
    private subscribers: Observer[] = [];

    subscribe(observer: Observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer: Observer) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
    }

    notify(news: string) {
        this.subscribers.forEach(subscriber => subscriber.update(news));
    }
}

// Наблюдатель (Observer)
class NewsSubscriber implements Observer {
    constructor(private name: string) {}

update(news: string) {
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
