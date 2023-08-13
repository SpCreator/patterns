class Product {
    operation() {
        return "Generic product operation";
    }
}

class ConcreteProductA extends Product {
    operation() {
        return "Product A operation";
    }
}

class ConcreteProductB extends Product {
    operation() {
        return "Product B operation";
    }
}

class Creator {
    createProduct(type) {
        switch (type) {
            case "A":
                return new ConcreteProductA();
            case "B":
                return new ConcreteProductB();
            default:
                throw new Error("Invalid product type");
        }
    }
}

// Использование
const creator = new Creator();

const productA = creator.createProduct("A");
console.log(productA.operation()); // Вывод: "Product A operation"

const productB = creator.createProduct("B");
console.log(productB.operation()); // Вывод: "Product B operation"
