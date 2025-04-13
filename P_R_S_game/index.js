
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