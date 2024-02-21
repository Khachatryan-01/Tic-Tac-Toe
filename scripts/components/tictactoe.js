class TicTacToe {
    constructor(container) {

        this.element = document.createElement("div");
        this.element.classList.add("wrapper");

        const title = document.createElement("h2");
        title.innerText = "Tic Tac Toe";
        this.element.append(title);

        new Board(this.element)

        container.append(this.element);

    }
}