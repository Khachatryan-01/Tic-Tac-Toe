class TicTacToe extends Base {
    constructor(container) {
        super("div", undefined, "wrapper", container);

        this.title = new Title(this.element, "Tic Tac Toe");
        this.board = new Board(this.element);
    }
}