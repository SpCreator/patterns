// Плохо
class LightBulb {
    turnOn() {
        // реализация включения лампочки
    }

    turnOff() {
        // реализация выключения лампочки
    }
}

class Switch {
    constructor(bulb) {
        this.bulb = bulb;
    }

    toggle() {
        if (this.bulb.isOn()) {
            this.bulb.turnOff();
        } else {
            this.bulb.turnOn();
        }
    }
}

// Хорошо
class Switch {
    constructor(device) {
        this.device = device;
    }

    toggle() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
}

class LightBulb {
    enable() {
        // реализация включения лампочки
    }

    disable() {
        // реализация выключения лампочки
    }
}
