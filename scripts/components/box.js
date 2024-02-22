class Box extends Base {
    constructor(container) {
        super("div", undefined, "box", container);

        this.button = new Button(this.element, "button")
    }

    addButtonEvent(event, func) {
        this.button.addEvent(event, func);
    }
}
