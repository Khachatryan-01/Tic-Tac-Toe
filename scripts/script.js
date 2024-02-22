const tictactoe = new TicTacToe(document.body);


// const title = document.createElement("h2");
// title.innerText = "Hello World";
// document.body.append(title);

// const container = document.createElement("div");
// container.classList.add("container_");
// document.body.append(container);
// const container = new Wrapper(document.body, "container_")


// const box1 = document.createElement("div");
// box1.classList.add("box1");
// container.append(box1);
// const newBox1 = new Wrapper(container.element, "box1");
// const newButton1 = new Button(newBox1.element, "button1");
// newButton1.element.innerText = "Hover Me!";
// newButton1.addEvent("mouseover", () => {
//     alert("Hovered RED side!");
// })

// const box2 = document.createElement("div");
// box2.classList.add("box2");
// container.append(box2);
// const newBox2 = new Wrapper(container.element, "box2");
// const newButton2 = new Button(newBox2.element, "button2");
// newButton2.element.innerText = "Hover Me!";
// newButton2.addEvent("mouseleave", () => {
//     alert("Hovered BLUE side!");
// })


//class A => log-"new instance"
//class B => log-"new instance"

// class Log {
//     constructor(tagName) {
//         if (this.constructor === Log) {
//             throw new Error("Abstract!")
//         }

//         if (tagName !== undefined) {
//             this.element = document.createElement(tagName);
//         }
//     }

//     log() {
//         console.log("This is log");
//     }
// }

// class A extends Log {
//     constructor() {
//         super("div");

//         this.prop = 5
//     }
// }

// class B extends Log {
//     constructor() {
//         super("button");

//     }
// }


//h2 "Hello World"

//<div>
//   <div>A</div> 50% background:red
//   <div>B</div> 50% background:blue
//</div>