let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let counter = 0;
let turnO = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
let draw = () => {
    counter++; 
    if (counter === 9) {
    document.getElementbyId(Idname).innerText  = "This Game Was Draw";}
};
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){ // player O turn
            box.innerText = "O";
            turnO = false; // turn changes to player X
        }
        else{ // player X turn
            box.innerText = "X";
            turnO = true; // turn changes to player Y
        }
        box.disabled = true;

        checkWinner();
        draw();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) =>{
    msg.innerText = `Congratulations Player ${winner}, You are the winner !!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText; 

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log(pos1val, "is winner");
                showwinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);