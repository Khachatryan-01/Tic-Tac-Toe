class TicTacToe extends Base {
    constructor(container) {
        super({
            tagName: "div",
            className: "wrapper",
            container
        });

        this.title = new Title(this.element, "Tic Tac Toe");
        this.recreateBoard();

        this.popup = new Popup(this.element, () => {
            this.recreateBoard();

            this.popup.removeClass("show");
        });
    }

    recreateBoard() {
        if (this.board) {
            this.board.remove();
        }

        this.board = new Board(this.element, this.onGameOver.bind(this));
    }

    onGameOver(gameStatus) {
        this.popup.addClass("show");

        if (gameStatus.win) {
            this.popup.winner(gameStatus.player);
        }
        else {
            this.popup.draw();
        }
    }
}