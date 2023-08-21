class Component {
    operation() {
        // ...
    }
}

class Composite extends Component {
    constructor() {
        super();
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    operation() {
        for (const child of this.children) {
            child.operation();
        }
    }
}

class Leaf extends Component {
    operation() {
        // ...
    }
}

const composite = new Composite();
const leaf1 = new Leaf();
const leaf2 = new Leaf();

composite.add(leaf1);
composite.add(leaf2);

composite.operation();
