function pickComputerMove() {
    const random = Math.random();
    if (random <= 1/3){
        computerMove = "Rock";
    }else if(random > 1/3 && random < 2/3){
        computerMove = "Paper";
    }else{
        computerMove = "Scissors";
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === "Rock") {
        if (computerMove === "Rock") {
            result = "Tie";
        } else if(computerMove === "Paper"){
            result = "You Lose";
        } else if(computerMove === "Scissors"){
            result = "You Win";
        }

    } else if(playerMove === "Paper") {
        if (computerMove === "Rock") {
            result = "You Win";
        } else if(computerMove === "Paper"){
            result = "Tie";
        } else if(computerMove === "Scissors"){
            result = "You Lose";
        }

    } else if(playerMove === "Scissors"){
        if (computerMove === "Rock") {
            result = "You Lose";
        } else if(computerMove === "Paper"){
            result = "You Win";
        } else if(computerMove === "Scissors"){
            result = "Tie";
        }
    }
}




































// FOR THE CART
let cartItem = 0;
function addCart() {
    cartItem++;
    document.getElementById('cartItem').innerHTML = "You have " + cartItem + " item(s) in your cart";
}
function plus2() {
    cartItem += 2;
    document.getElementById('cartItem').innerHTML = "You have " + cartItem + " item(s) in your cart";
}
function plus3() {
    cartItem += 3;
    document.getElementById('cartItem').innerHTML = "You have " + cartItem + " item(s) in your cart";
}
function resetCart() {
    cartItem = 0;
    document.getElementById('cartItem').innerHTML = "Your cart has been reset to " + cartItem + " items";
}