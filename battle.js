// let allRows=document.getElementsByClassName("row");
// for(let i=0;i<allRows.length;i++){
//     // let rowChildren=allRows[i].childNodes;
//     for(let j=0;j<=3;j++){
//         console.log(allRows[i][j])
//     }
// }
// pop up of battleShip
const allBattleShip = document.querySelectorAll(".box");
let rightClick = 0;
let click = true;
let isClicked = true;
function appendBattleshipImg() {
    for (let battleShip of allBattleShip) {
        battleShip.onclick = () => {
            rightClick = rightClick + 1;
            if (rightClick === 4) {
                alert("win");
                clearDivs();
            }
            if (isClicked == true) {
                isClicked = false;
                let battleShipImg = document.createElement("img");
                battleShipImg.src =
                    "https://t4.ftcdn.net/jpg/03/28/89/59/240_F_328895911_E2Jkmv8lT1IoHNyHrHE1GczzSXb3kXnp.jpg";
                battleShipImg.style.width = "100px";
                battleShipImg.style.height = "100px";
                battleShip.appendChild(battleShipImg);
            }
        };
    }
}

appendBattleshipImg();

//wrong classes
const allWrongClasses = document.querySelectorAll(".wrong");
let wrongClick = 0;

function appendWrongImg() {
    for (const wrongDiv of allWrongClasses) {
        wrongDiv.onclick = () => {
            // creating image of wrong image
            let wrongImage = document.createElement("img");
            wrongImage.src =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz76IF3bFNkMquzA0Pv4FN5c-WCzgbg-7AhdQxun8&s";
            wrongImage.style.width = "100px";
            wrongImage.style.height = "100px";
            wrongDiv.appendChild(wrongImage);
            //lose alert


            wrongClick = wrongClick + 1;
            if (wrongClick === 5) {
                alert("lose");
                clearDivs();
            }
        };
    }
}
appendWrongImg();
//disable button

const wrongDiv = document.getElementsByClassName("wrong");
for (let wrong of wrongDiv) {
    wrong.addEventListener("click", disable);
}
function disable() {
    document.getElementsByClassName("wrong").disabled = true;
}

// resetButton
const allTd = document.querySelectorAll("td");
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", clearDivs);

function clearDivs() {
    for (let td of allTd) {
        td.innerHTML = "";
    }
}

//INSTRUCTIONS
const instructions = document.getElementById("instructions");
instructions.addEventListener("click", alertInstruction);

function alertInstruction() {
    alert(
        "INSTRUCTIONS:\nfind four battleships and you win\npredicting five wrong boxes and you lose"
    );
}

// multiple click
// for (let td of allTd) {
//   td.addEventListener("click", disable);
// }

// function disable() {
//   allTd.attr.disabled = true;
// }
