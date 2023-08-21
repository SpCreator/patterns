class RealSubject {
    operation() {
        // ...
    }
}

class Proxy {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }

    operation() {
        // Дополнительная логика перед вызовом реального объекта
        // ...

        this.realSubject.operation();

        // Дополнительная логика после вызова реального объекта
        // ...
    }
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.operation();
