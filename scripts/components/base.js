class Base {
    constructor(tagName, text, className, container) {
        this.element = document.createElement(tagName);

        if (text !== undefined) {
            this.element.innerText = text;
        }
        
        if (className !== undefined) {
            this.element.classList.add(className);
        }
        
        container.append(this.element);
    }
}