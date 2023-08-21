class ResourceProvider {
    getResource() {}
}

class ConcreteResourceProvider extends ResourceProvider {
    getResource() {
        // Возвращаем ресурс
    }
}

const resourceProvider = new ConcreteResourceProvider();
const resource = resourceProvider.getResource();
