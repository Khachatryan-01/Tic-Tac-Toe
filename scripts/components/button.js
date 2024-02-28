class Button extends Base {
    constructor(container, className, text) {
        super({
            tagName: "button",
            text,
            className,
            container
        });
    }
}