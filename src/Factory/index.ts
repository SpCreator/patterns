// Интерфейс для транспортных средств
interface Transport {
    deliver(): string;
}

// Класс Car, реализующий интерфейс Transport
class Car implements Transport {
    deliver(): string {
        return 'Car is delivering cargo.';
    }
}

// Класс Bicycle, реализующий интерфейс Transport
class Bicycle implements Transport {
    deliver(): string {
        return 'Bicycle is delivering cargo.';
    }
}

// Фабрика для создания транспортных средств
class TransportFactory {
    createCar(): Transport {
        return new Car();
    }

    createBicycle(): Transport {
        return new Bicycle();
    }
}

const factory = new TransportFactory();
const car = factory.createCar();
const bicycle = factory.createBicycle();

console.log(car.deliver());      // Output: Car is delivering cargo.
console.log(bicycle.deliver());  // Output: Bicycle is delivering cargo.
