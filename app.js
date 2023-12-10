let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X , player Y....

const winPatterns = [  //uses array 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {  //player0 ki turn
        box.innerText = "O";
        turnO = false;
    } else {   //player X ki turn
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true; //for never repeating  x and o on single box with double Tap
       chckWinner();  
 });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const chckWinner = () => {
    for(pattern of winPatterns){
        console.log( [pattern[0]], [pattern[1]], [pattern[2]]);
        console.log(
            boxes [pattern[0]].innerText,
            boxes [pattern[1]].innerText,
            boxes [pattern[2]].innerText
            );
            
            let pos1Val = boxes [pattern[0]].innerText;
            let pos2Val = boxes [pattern[1]].innerText;
            let pos3Val = boxes [pattern[2]].innerText;
            if(pos1Val !="" && pos2Val != "" && pos3Val != "" ){  // position 1 value should not euals to empty //position 2 value should not euals to empty //position 3 value should not euals to empty//for checking win pattern
             if (pos1Val=== pos2Val && pos2Val===pos3Val) {  //position 1 is euals to position 2 and position 2 is equals to position 3
                showWinner();
            }  
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);