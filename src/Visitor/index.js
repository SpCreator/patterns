class Visitor {
    visitConcreteElementA(element) {}
    visitConcreteElementB(element) {}
}

class ConcreteVisitor extends Visitor {
    visitConcreteElementA(element) {
        // ...
    }

    visitConcreteElementB(element) {
        // ...
    }
}

class Element {
    accept(visitor) {}
}

class ConcreteElementA extends Element {
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }
}

class ConcreteElementB extends Element {
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }
}

const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor = new ConcreteVisitor();

for (const element of elements) {
    element.accept(visitor);
}
