class Button extends Base {
    constructor(container, className) {
        super("button", undefined, className, container);
    }

    addEvent(event,func) {
        this.element.addEventListener(event, func);
    }

}