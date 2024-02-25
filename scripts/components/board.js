class Board extends Base {

    constructor(container, onFinish) {
        super("div", undefined, "board", container);

        this.onFinish = onFinish
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        for (let y = 0; y < this.matrix.length; y++) {
            const row = new Wrapper(this.element, "row");

            for (let x = 0; x < this.matrix[y].length; x++) {
                const box = new Box(row.element);

                box.addButtonEvent("click", (e) => {
                    const btn = e.target;

                    if (btn.innerText) {
                        return;
                    }
                    if (this.lastPlayer === "X") {
                        btn.innerText = "O";
                        this.matrix[y][x] = 2;
                    }
                    else {
                        btn.innerText = "X";
                        this.matrix[y][x] = 1;
                    }
                    this.lastPlayer = btn.innerText;

                    this.updateGameStatus(x, y);
                });
            }
        }
    }



    updateGameStatus(x, y) {
        const gameStatus = this.chackGameStatus(x, y);

        if (gameStatus.win) {
            alert(`Player ${gameStatus.player} - WIN`);
        }
        else if (gameStatus.draw) {
            alert("Draw!");
        }

        if (gameStatus.win || gameStatus.draw) {
            this.onFinish();
        }
    }

    chackGameStatus(x, y) {
        const gameStatus = this.checkWin(x, y);

        if (!gameStatus.win) {
            gameStatus.draw = this.checkDraw()
        }

        return gameStatus;

    }

    checkWin(x, y) {
        let player_X_Win = true;
        let player_O_Win = true;

        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[y][i] !== 1) {
                player_X_Win = false;
            }
            if (this.matrix[y][i] !== 2) {
                player_O_Win = false;
            }
        }

        if (!player_X_Win && !player_O_Win) {

            player_X_Win = true;
            player_O_Win = true;

            for (let i = 0; i < this.matrix.length; i++) {
                if (this.matrix[i][x] !== 1) {
                    player_X_Win = false;
                }
                if (this.matrix[i][x] !== 2) {
                    player_O_Win = false;
                }
            }
        }

        let isPrimary = y + x === this.matrix.length - 1;
        let isSecondary = y === x;

        if (!player_X_Win && !player_O_Win && isSecondary) {

            player_X_Win = true;
            player_O_Win = true;

            for (let i = 0; i < this.matrix.length; i++) {
                if (this.matrix[i][i] !== 1) {
                    player_X_Win = false;
                }
                if (this.matrix[i][i] !== 2) {
                    player_O_Win = false;
                }
            }
        }

        if (!player_X_Win && !player_O_Win && isPrimary) {

            player_X_Win = true;
            player_O_Win = true;

            for (let i = 0; i < this.matrix.length; i++) {
                if (this.matrix[i][this.matrix.length - 1 - i] !== 1) {
                    player_X_Win = false;
                }
                if (this.matrix[i][this.matrix.length - 1 - i] !== 2) {
                    player_O_Win = false;
                }
            }
        }

        const gameStatus = {
            win: player_X_Win || player_O_Win
        }

        if (gameStatus.win) {
            gameStatus.player = player_X_Win ? "X" : "O";
        }

        return gameStatus;

    }

    checkDraw() {
        for (let y = 0; y < this.matrix.length; y++) {
            for (let x = 0; x < this.matrix[y].length; x++) {

                if (this.matrix[y][x] === 0) {
                    return false;
                }
            }
        }

        return true;
    }
}
