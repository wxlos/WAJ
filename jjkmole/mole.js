let moleTile;
let yujiTile;
let score = 0;
let gameOver = false;


window.onload = function(){
    setGame();
}

function setGame(){
    //set up grid/board for game in html

    //i goes from 0 to 8, stops at 9
    for (let i = 0; i < 9; i++){
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);

    }
    setInterval(setMole, 1000); //1000 milliseconds = 1 seconds
    setInterval(setYuji, 2000); //2000 milliseconds = 2 seconds
}

function getRandomTile(){
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) intgergers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setMole(){
    if(gameOver){
        return;
    }

    if (moleTile){
        moleTile.innerHTML = " ";
    }

    let mole = document.createElement("img");
    mole.src = "./sukunamole.gif";

    let num = getRandomTile();
    if (yujiTile && yujiTile.id == num){
        return;
    }

    moleTile = document.getElementById(num);
    moleTile.appendChild(mole);
}

function setYuji(){
    if(gameOver == true){
        return;
    }

    if(yujiTile){
        yujiTile.innerHTML = " ";

    }

    let yuji = document.createElement("img");
    yuji.src = "./yujimole.gif";

    let num = getRandomTile();
    if(moleTile && moleTile.id == num){
        return;
    }

    yujiTile = document.getElementById(num);
    yujiTile.appendChild(yuji);
}

function selectTile(){
    if(gameOver){
        return;
    }
    
    if(this == yujiTile){
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score

    }
    else if(this == moleTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}