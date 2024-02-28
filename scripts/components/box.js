class Box extends Base {
    constructor(container) {
        super({
            tagName: "div",
            className: "box",
            container
        });

        this.button = new Button(this.element, "button");
    }

    addButtonEvent(event, func) {
        this.button.addEvent(event, func);
    }
}
