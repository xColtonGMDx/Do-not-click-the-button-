// Your compliments go here
const compliments = [
    "Hi Emmy :)",
    "UwU",
    "Shrek rave",
    "Why'd you click",
    "i hate you"
];

const complimentText = document.getElementById("compliment");
const responseText = document.getElementById("response");

document.getElementById("newBtn").onclick = function() {
    const random = Math.floor(Math.random() * compliments.length);
    complimentText.textContent = compliments[random];
};

document.getElementById("yesBtn").onclick = function() {
    responseText.textContent = "Yay :)";
};

document.getElementById("noBtn").onclick = function() {
    responseText.textContent = "That's okay, thank you for being honest.";
};