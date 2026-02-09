
// variables
document.getElementById("welcomeMessage").innerText = "You've Connected The Javascript!";


// functions
function button() {

    var input = document.getElementById("userInput").value;
    console.log(input);
    document.getElementById("welcomeMessage").innerText = input;
}
