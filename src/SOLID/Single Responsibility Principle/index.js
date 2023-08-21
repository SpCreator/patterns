// Плохо
class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    saveToDatabase(user) {
        // сохранение пользователя в базу данных
    }
}

// Хорошо
class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class UserRepository {
    saveToDatabase(user) {
        // сохранение пользователя в базу данных
    }
}
