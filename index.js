let scoreHome = document.getElementById("home-score");
let scoreGuest = document.getElementById("guest-score");

let scoreH = 0;
let scoreG = 0;

function incrementOneH() {
    scoreH += 1;
    scoreHome.textContent = scoreH;
} 

function incrementTwoH() {
    scoreH += 2;
    scoreHome.textContent = scoreH;
} 

function incrementThreeH() {
    scoreH += 3;
    scoreHome.textContent = scoreH;
} 

function incrementOneG() {
    scoreG += 1;
    scoreGuest.textContent = scoreG;
} 

function incrementTwoG() {
    scoreG += 2;
    scoreGuest.textContent = scoreG;
} 

function incrementThreeG() {
    scoreG += 3;
    scoreGuest.textContent = scoreG;
} 

