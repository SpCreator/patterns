// Абстрактные продукты
interface Chair {
    sit(): void;
}

interface Sofa {
    lieDown(): void;
}

// Абстрактная фабрика
interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
}

// Конкретные продукты
class ModernChair implements Chair {
    sit() {
        console.log('Sitting on a modern chair.');
    }
}

class VictorianChair implements Chair {
    sit() {
        console.log('Sitting on a Victorian chair.');
    }
}

class ModernSofa implements Sofa {
    lieDown() {
        console.log('Lying down on a modern sofa.');
    }
}

class VictorianSofa implements Sofa {
    lieDown() {
        console.log('Lying down on a Victorian sofa.');
    }
}

// Конкретная фабрика для создания современной мебели
class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }
}

// Конкретная фабрика для создания викторианской мебели
class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createSofa(): Sofa {
        return new VictorianSofa();
    }
}

// Использование абстрактной фабрики
function orderFurniture(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();

    chair.sit();
    sofa.lieDown();
}

const modernFactory = new ModernFurnitureFactory();
const victorianFactory = new VictorianFurnitureFactory();

orderFurniture(modernFactory); // Вывод: Sitting on a modern chair. Lying down on a modern sofa.
orderFurniture(victorianFactory); // Вывод: Sitting on a Victorian chair. Lying down on a Victorian sofa.
