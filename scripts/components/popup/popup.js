class Popup extends Base {
    constructor({ onClose, container }) {
        super({
            tagName: "div",
            className: "popup",
            container
        });

        this.wrapper = new Wrapper({ className: "popupContainer", container: this });
        this.winnerName = new Title({ className: "winner", container: this.wrapper });
        this.button = new Button({ className: "popupButton", text: "OK", container: this.wrapper });
        this.button.addEvent("click", onClose);
    }

    winner(player) {
        this.winnerName.changeText(`Player ${player} WON`);
    }

    draw() {
        this.winnerName.changeText("DRAW!");
    }
}