// Плохо
class Bird {
    fly() {
        // реализация полета
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error('Penguins cannot fly');
    }
}

// Хорошо
class Bird {
    fly() {
        // реализация полета
    }
}

class Penguin extends Bird {
    fly() {
        // пингвины не летают
    }
}
