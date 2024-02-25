class TicTacToe extends Base {
    constructor(container) {
        super("div", undefined, "wrapper", container);

        this.title = new Title(this.element, "Tic Tac Toe");
        this.recreateBoard();
        
    }

    recreateBoard() {
        if (this.board) {
            this.board.element.remove()
        }
        this.board = new Board(this.element, this.recreateBoard.bind(this));
    }
}