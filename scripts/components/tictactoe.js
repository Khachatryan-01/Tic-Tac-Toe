class TicTacToe extends Base {
    constructor({ container }) {
        super({
            tagName: "div",
            className: "wrapper",
            container
        });

        this.title = new Title({ text: "Tic Tac Toe", container: this });
        this.recreateBoard();

        this.popup = new Popup({
            onClose: () => {
                this.recreateBoard();

                this.popup.removeClass("show");
            },

            container: this
        });
    }

    recreateBoard() {
        if (this.board) {
            this.board.remove();
        }

        this.board = new Board({
            onGameOver: this.onGameOver.bind(this),
            container: this
        });
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