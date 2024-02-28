class Popup extends Base {
    constructor(container, onClose) {
        super({
            tagName: "div",
            className: "popup",
            container
        });
        
        this.wrapper = new Wrapper(this.element, "popupContainer");
        this.winnerName = new Title(this.wrapper.element, "", "winner");
        this.button = new Button(this.wrapper.element, "popupButton", "OK");
        this.button.addEvent("click", onClose);
    }

    winner(player) {
        this.winnerName.changeText(`Player ${player} WON`);
    }

    draw() {
        this.winnerName.changeText("DRAW!");
    }
}