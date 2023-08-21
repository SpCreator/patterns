// Абстрактный продукт
abstract class Product {
    abstract getDescription(): string;
}

// Конкретные продукты
class BookProduct extends Product {
    private readonly _title: string;
    private readonly _author: string;
    private readonly _genre: string;

    constructor(title: string, author: string, genre: string) {
        super();
        this._title = title;
        this._author = author;
        this._genre = genre;
    }

    getDescription(): string {
        return `This is a book name: ${this._title}, author: ${this._author}, genre: ${this._genre}`;
    }
}

class MovieProduct extends Product {
    private readonly _title: string;
    private readonly _director: string;
    private readonly _genre: string;

    constructor(title: string, director: string, genre: string) {
        super();
        this._title = title;
        this._director = director;
        this._genre = genre;
    }

    getDescription(): string {
        return `This is a movie name: ${this._title}, director: ${this._director}, genre: ${this._genre}`;
    }
}

// Абстрактный класс для фабрики
abstract class ProductFactory {
    abstract createProduct(type: string): Product;
}

// Конкретные фабрики для создания продуктов
class BookFactory extends ProductFactory {
    createProduct(type: string): Product {
        if (type === "book") {
            return new BookProduct("The Lord of the Rings", "J.R.R. Tolkien", "fantasy");
        }
        else {
            throw new Error("Unknown product type: " + type);
        }
    }
}

class MovieFactory extends ProductFactory {
    createProduct(type: string): Product {
        if (type === "movie") {
            return new MovieProduct("The Lord of the Rings: The Fellowship of the Ring", "Peter Jackson", "fantasy");
        }
        else {
            throw new Error("Unknown product type: " + type);
        }
    }
}

// Использование фабричного метода
function getProductDescription(factory: ProductFactory, type: string) {
    const product = factory.createProduct(type);
    const description = product.getDescription();

    console.log(description);
}

getProductDescription(new BookFactory(), "book"); // Вывод: This is a book name: The Lord of the Rings, author: J.R.R. Tolkien, genre: fantasy
getProductDescription(new MovieFactory(), "movie"); // Вывод: This is a movie name: The Lord of the Rings: The Fellowship of the Ring, director: Peter Jackson, genre: fantasy
