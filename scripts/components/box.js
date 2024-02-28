class Box extends Base {
    constructor({ container }) {
        super({
            tagName: "div",
            className: "box",
            container
        });

        this.button = new Button({ className: "button", container: this });
    }

    addButtonEvent(event, func) {
        this.button.addEvent(event, func);
    }
}
