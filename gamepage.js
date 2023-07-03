// generation of random value

// count of attempts

// until hit
var guess = 0;
function sumbit() {
    var y = Math.floor(Math.random() * 10 + 1);
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("Congratulations" + player_name + "! You guess it right in " + guess + " guess");
    } else if (x > y) {
        guess++;
        alert("Try a smaller number");
    } else {
        guess++;
        alert("Try a greater number");
    }
}
// function for the number sent by the user
function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}