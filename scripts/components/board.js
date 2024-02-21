class Board {
    constructor(container) {

        this.element = document.createElement("div");
        this.element.classList.add("board");

        const matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        for (let y = 0; y < matrix.length; y++) {
            this.row = new Wrapper(this.element);
            this.row.element.classList.add("row");

            for (let x = 0; x < matrix[y].length; x++) {
                const box = new Box(this.row.element);

                box.button.addEventListener("click", (e) => {
                    const btn = e.target;

                    if (btn.innerText) {
                        return;
                    }
                    if (window.lastPlayer === "X") {
                        box.button.innerText = "O";
                        matrix[y][x] = 2;
                    }
                    else {
                        box.button.innerText = "X";
                        matrix[y][x] = 1;
                    }

                    // bool=fasle
                    // [].some(condition) = loop if(condition) { bool = true; break; }
                    // [].every(condition) = loop if(!condition) { bool = false; break; }

                    let player_1 = true;
                    let player_2 = true;

                    for (let i = 0; i < matrix.length; i++) {
                        if (matrix[y][i] !== 1) {
                            player_1 = false;
                        }
                        if (matrix[y][i] !== 2) {
                            player_2 = false;
                        }
                    }

                    if (!player_1 && !player_2) {

                        player_1 = true;
                        player_2 = true;

                        for (let i = 0; i < matrix.length; i++) {
                            if (matrix[i][x] !== 1) {
                                player_1 = false;
                            }
                            if (matrix[i][x] !== 2) {
                                player_2 = false;
                            }
                        }
                    }

                    let isPrimary = y + x === matrix.length - 1;
                    let isSecondary = y === x;

                    if (!player_1 && !player_2 && isSecondary) {

                        player_1 = true;
                        player_2 = true;

                        for (let i = 0; i < matrix.length; i++) {
                            if (matrix[i][i] !== 1) {
                                player_1 = false;
                            }
                            if (matrix[i][i] !== 2) {
                                player_2 = false;
                            }
                        }
                    }

                    if (!player_1 && !player_2 && isPrimary) {

                        player_1 = true;
                        player_2 = true;

                        for (let i = 0; i < matrix.length; i++) {
                            if (matrix[i][matrix.length - 1 - i] !== 1) {
                                player_1 = false;
                            }
                            if (matrix[i][matrix.length - 1 - i] !== 2) {
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

                    window.lastPlayer = btn.innerText;
                });
            }
        }
        container.append(this.element);
    }
}