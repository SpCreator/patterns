class UserDTO {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
}

// В слое сервиса или контроллера
const user = new UserDTO(1, 'john_doe');
userService.createUser(user);

// В слое бизнес-логики
class UserService {
    createUser(user) {
        // Создание пользователя на основе данных из user
    }
}
