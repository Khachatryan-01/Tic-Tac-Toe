const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.append(wrapper);

const title = document.createElement("h2");
title.innerText = "Tic Tac Toe";
wrapper.append(title);

const board = document.createElement("div");
board.classList.add("board");
wrapper.append(board);

for (let y = 0; y < 3; y++) {
    
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let x = 0; x < 3; x++) {

        const box = document.createElement("div");
        box.classList.add("box");

        const button = document.createElement("button");
        button.classList.add("button");
        box.append(button);

        button.addEventListener("click", (e) => {
            
            if (window.character === undefined) {
                button.innerText = "X";
            }
            else if (window.character === "X") {
                button.innerText = "O"

            } else {
                button.innerText = "X"
            }

            window.character = e.target.innerText
        })

        rowElement.append(box);

    }

    board.append(rowElement);

}