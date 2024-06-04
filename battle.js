let closeResultIcon=document.getElementById("closeResultIcon");
closeResultIcon.addEventListener("click",()=>{
    document.getElementById("gameResultDiv").style.display="none";
});





function getRandomDigit(exclude) {
    let digit;
    do {
        digit = Math.floor(Math.random() * 16); // 16 because we want digits from 0 to 15
    } while (exclude.includes(digit));
    return digit;
}

function getRandomFourAndRemaining() {
    let randomFour = [];
    let allDigits = Array.from({ length: 16 }, (_, i) => i); // Create an array [0, 1, ..., 15]

    // Get 4 random non-repeating digits
    for (let i = 0; i < 4; i++) {
        const newDigit = getRandomDigit(randomFour);
        randomFour.push(newDigit);
    }

    let remaining = allDigits.filter(digit => !randomFour.includes(digit));


    const allDivs = document.querySelectorAll("td");
    const allImages = document.querySelectorAll(".images");

    // Clear previous classes and images
    allDivs.forEach(div => {
        div.classList.remove("battleship", "wrong", "clicked");
        const img = div.querySelector("img");
        if (img) {
            img.src = "";
        }
    });

    // Place battleship images
    randomFour.forEach(index => {
        allDivs[index].classList.add("battleship");
        allImages[index].src = "https://t4.ftcdn.net/jpg/03/28/89/59/240_F_328895911_E2Jkmv8lT1IoHNyHrHE1GczzSXb3kXnp.jpg";
    });

    // Place wrong images
    remaining.forEach(index => {
        allDivs[index].classList.add("wrong");
        allImages[index].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz76IF3bFNkMquzA0Pv4FN5c-WCzgbg-7AhdQxun8&s";
    });
}

function clearDivs() {
    rightClick = 0;
    wrongClick = 0;
    allowClick();

    const allDivs = document.querySelectorAll("td");
    const allImgs = document.querySelectorAll(".images");

    allDivs.forEach((div, index) => {
        div.innerHTML = '<img class="images">';
        div.classList.remove("battleship", "wrong", "clicked");
    });

    // Ensure the images are re-selected after being replaced
    getRandomFourAndRemaining();
}

let rightClick = 0;
let wrongClick = 0;
const gameResult = document.getElementById("gameResult");
const allTd = document.querySelectorAll("td");

allTd.forEach(td => {
    td.addEventListener("click", () => {
        // Prevent multiple clicks on the same cell
        if (td.classList.contains("clicked")) return;

        td.classList.add("clicked");

        const img = td.children[0];
        img.style.display = "block";

        if (td.classList.contains("battleship")) {
            rightClick++;
        } else {
            wrongClick++;
        }

        if (rightClick === 4) {
            preventClick();
            gameResult.textContent = "WIN";
            setTimeout(()=>{
                document.getElementById("gameResultDiv").style.display="flex";
            },500);
            setTimeout(()=>{
                document.getElementById("gameResultDiv").style.display="none";
                
            },3000);
            updateScore("win");
            setTimeout(clearDivs, 3000);
        }

        if (wrongClick === 5) {
            preventClick();
            gameResult.textContent = "LOSE";
            setTimeout(()=>{
                document.getElementById("gameResultDiv").style.display="flex";
            },500);
            setTimeout(()=>{
                document.getElementById("gameResultDiv").style.display="none";
            },3000);
            updateScore("lose");
            setTimeout(clearDivs, 3000);
        }
    });
});

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", clearDivs);

// Initialize the game board for the first time
getRandomFourAndRemaining();

const updateScore = (result) => {
    let totalGames = parseInt(document.getElementById("totalGames").textContent);
    totalGames += 1;
    document.getElementById("totalGames").textContent = totalGames;
    if(result==="win"){
        document.getElementById("totalWins").textContent = parseInt(document.getElementById("totalWins").textContent)+1;
    }
    else{
        document.getElementById("totalLoses").textContent = parseInt(document.getElementById("totalLoses").textContent)+1;
    }

}
const preventClick = () => {
    let allImagesDiv = document.querySelectorAll(".imagesDiv");
    for(let i=0;i<allImagesDiv.length;i++){
        allImagesDiv[i].style.pointerEvents="none";
    }
}
const allowClick = () => {
    let allImagesDiv = document.querySelectorAll(".imagesDiv");
    for(let i=0;i<allImagesDiv.length;i++){
        allImagesDiv[i].style.pointerEvents="auto";
    }
}
