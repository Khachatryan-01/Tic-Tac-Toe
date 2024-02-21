class Box {
    constructor(container) {

        this.element = document.createElement("div");
        this.element.classList.add("box");

        this.button = document.createElement("button");
        this.button.classList.add("button");
        this.element.append(this.button);

        container.append(this.element);
    }
}
