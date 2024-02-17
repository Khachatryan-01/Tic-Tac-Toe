const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.append(wrapper);

const title = document.createElement("h2");
title.innerText = "Tic Tac Toe";
wrapper.append(title);

const board = document.createElement("div");
board.classList.add("board");
wrapper.append(board);

const matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


for (let y = 0; y < matrix.length; y++) {

    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let x = 0; x < matrix[y].length; x++) {

        const box = document.createElement("div");
        box.classList.add("box");

        const button = document.createElement("button");
        button.classList.add("button");
        box.append(button);

        // if (y + x === matrix.length - 1) { //glxavor
        //     button.style.backgroundColor = "red";
        // }
        // if (y === x) { //ojandaj
        //     button.style.backgroundColor = "red";
        // }

        button.addEventListener("click", (e) => {
            const btn = e.target;

            if (btn.innerText) {
                return;
            }

            if (window.lastPlayer === "X") {
                button.innerText = "O";
                matrix[y][x] = 2;
            }
            else {
                button.innerText = "X";
                matrix[y][x] = 1;
            }

            // bool=fasle
            // [].some(condition) = loop if(condition) { bool = true; break; }
            // [].every(condition) = loop if(!condition) { bool = false; break; }

            // [0, 0, 0],
            // [0, 0, 0],
            // [0, 0, 0]

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

        rowElement.append(box);

    }
    board.append(rowElement);
}


