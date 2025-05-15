// const display = document.getElementById('screen_detail');

function solve(pickedNumber) {
    const display = document.getElementById('screen_detail');
    display.value += pickedNumber;
}
function clearPlease() {
    document.getElementById('screen_detail').value = "";

}
function calculate() {
    try {
        let evaluate = document.getElementById('screen_detail').value;
        evaluate = eval(evaluate);
        document.getElementById('screen_detail').value = evaluate;
    } catch (error) {
        document.getElementById('screen_detail').value = "Error";
    }
    
    
}