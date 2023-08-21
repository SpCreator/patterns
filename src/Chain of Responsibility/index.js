class Handler {
    setNext(handler) {}
    handleRequest(request) {}
}

class ConcreteHandler extends Handler {
    setNext(handler) {
        this.nextHandler = handler;
    }

    handleRequest(request) {
        if (this.canHandle(request)) {
            // Обработка запроса
        } else if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }

    canHandle(request) {
        // Проверка, может ли текущий обработчик обработать запрос
    }
}

const handler1 = new ConcreteHandler();
const handler2 = new ConcreteHandler();
handler1.setNext(handler2);

handler1.handleRequest('request');
