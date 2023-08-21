class AbstractClass {
    templateMethod() {
        this.operation1();
        this.operation2();
    }

    operation1() {}
    operation2() {}
}

class ConcreteClass extends AbstractClass {
    operation1() {
        // ...
    }

    operation2() {
        // ...
    }
}

const concreteClass = new ConcreteClass();
concreteClass.templateMethod();
