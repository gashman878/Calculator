
function rock() {
    const random = Math.random();
    if (random <= 1/3){
        document.getElementById('please').innerHTML = "I choose Rock, Thats a draw";
    }else if(random > 1/3 && random < 2/3){
        document.getElementById('please').innerHTML = "I choose Paper, You Lost";
    }else{
        document.getElementById('please').innerHTML = "I choose Scissors, You won";
    }
}

function paper() {
    const random = Math.random();
    if (random <= 1/3){
        document.getElementById('please').innerHTML = "I choose Rock, You won";
    }else if(random > 1/3 && random < 2/3){
        document.getElementById('please').innerHTML = "I choose Paper, Thats a draw";
    }else{
        document.getElementById('please').innerHTML = "I choose Scissors, You lost";
    }
}

function scissors() {
    const random = Math.random();
    if (random <= 1/3){
        document.getElementById('please').innerHTML = "I choose Rock, You Lost";
    }else if(random > 1/3 && random < 2/3){
        document.getElementById('please').innerHTML = "I choose Paper, You Won";
    }else{
        document.getElementById('please').innerHTML = "I choose Scissors, Thats a draw";
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