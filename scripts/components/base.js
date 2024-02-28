class Base {
    constructor({ tagName, text, className, container } = {}) {
        if (this.constructor === Base) {
            throw new Error("Base class is an Abstract class!");
        }

        this.element = document.createElement(tagName);

        if (text !== undefined) {
            this.changeText(text);
        }

        if (className !== undefined) {
            this.addClass(className);
        }

        if (container instanceof HTMLElement) {
            container.append(this.element);
        }
        else if (container instanceof Base) {
            container.element.append(this.element);
        }
    }

    changeText(text) {
        this.element.innerText = text;
    }

    addClass(className) {
        this.element.classList.add(className);
    }

    removeClass(className) {
        this.element.classList.remove(className);
    }

    addEvent(event, func) {
        this.element.addEventListener(event, func);
    }

    remove() {
        this.element.remove();
    }

}