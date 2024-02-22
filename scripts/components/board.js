class Board extends Base {
    constructor(container) {
        super("div", undefined, "board", container);

        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        for (let y = 0; y < this.matrix.length; y++) {
            this.row = new Wrapper(this.element, "row");

            for (let x = 0; x < this.matrix[y].length; x++) {
                const box = new Box(this.row.element);

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

                    // bool=fasle
                    // [].some(condition) = loop if(condition) { bool = true; break; }
                    // [].every(condition) = loop if(!condition) { bool = false; break; }

                    let player_1 = true;
                    let player_2 = true;

                    for (let i = 0; i < this.matrix.length; i++) {
                        if (this.matrix[y][i] !== 1) {
                            player_1 = false;
                        }
                        if (this.matrix[y][i] !== 2) {
                            player_2 = false;
                        }
                    }

                    if (!player_1 && !player_2) {

                        player_1 = true;
                        player_2 = true;

                        for (let i = 0; i < this.matrix.length; i++) {
                            if (this.matrix[i][x] !== 1) {
                                player_1 = false;
                            }
                            if (this.matrix[i][x] !== 2) {
                                player_2 = false;
                            }
                        }
                    }

                    let isPrimary = y + x === this.matrix.length - 1;
                    let isSecondary = y === x;

                    if (!player_1 && !player_2 && isSecondary) {

                        player_1 = true;
                        player_2 = true;

                        for (let i = 0; i < this.matrix.length; i++) {
                            if (this.matrix[i][i] !== 1) {
                                player_1 = false;
                            }
                            if (this.matrix[i][i] !== 2) {
                                player_2 = false;
                            }
                        }
                    }

                    if (!player_1 && !player_2 && isPrimary) {

                        player_1 = true;
                        player_2 = true;

                        for (let i = 0; i < this.matrix.length; i++) {
                            if (this.matrix[i][this.matrix.length - 1 - i] !== 1) {
                                player_1 = false;
                            }
                            if (this.matrix[i][this.matrix.length - 1 - i] !== 2) {
                                player_2 = false;
                            }
                        }
                    }
                    if (player_1) {
                        alert("Player 'X' WIN");
                    }
                    if (player_2) {
                        alert("Player 'O' WIN");
                    }

                    this.lastPlayer = btn.innerText;
                });
            }
        }
    }
}