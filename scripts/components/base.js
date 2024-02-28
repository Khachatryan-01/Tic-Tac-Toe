class Base {
    constructor(options) {

        this.element = document.createElement(options.tagName);

        if (options.text !== undefined) {
            this.changeText(options.text);
        }

        if (options.className !== undefined) {
            this.addClass(options.className);
        }

        options.container.append(this.element);
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