class Button extends Base {
    constructor({ className, text, container }) {
        super({
            tagName: "button",
            text,
            className,
            container
        });
    }
}