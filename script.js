"use strict";
window.addEventListener("load", start);

let point = 0;
let liv = 0;

function start() {
  console.log("JavaScript kører!");

  // nulstil point og liv
  point = 0;
  liv = 3;

  // Start animationer
  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");

  // Registrer click
  document.querySelector("#coin1_container").addEventListener("click", clickCoin);
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);
}

function clickCoin() {
  console.log("Click coin");
  // Forhindr gentagne clicks
  document.querySelector("#coin1_container").removeEventListener("click", clickCoin);
  
  // Stop coin container
  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#coin1_container").addEventListener("animationend", coinGone);
  
  // Giv point
  givPoint();
}

function coinGone() {
  // fjern event der bringer os herind
  document.querySelector("#coin1_container").removeEventListener("animationend", coinGone);

  // fjern forsvind-animation
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");
  
  // fjern pause
  document.querySelector("#coin1_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");

  // gør det muligt at klikke på coin igen
  document.querySelector("#coin1_container").addEventListener("click", clickCoin);
}



function clickBomb() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document.querySelector("#bomb_container").removeEventListener("click", clickBomb);
  
  // Stop coin container
  document.querySelector("#bomb_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bomb_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#bomb_container").addEventListener("animationend", bombGone);
  
  mistLiv();
}

function bombGone() {
  // fjern event der bringer os herind
  document.querySelector("#bomb_container").removeEventListener("animationend", bombGone);

  // fjern forsvind-animation
  document.querySelector("#bomb_sprite").classList.remove("zoom_in");
  
  // fjern pause
  document.querySelector("#bomb_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#bomb_container").classList.remove("falling");
  document.querySelector("#bomb_container").offsetWidth;
  document.querySelector("#bomb_container").classList.add("falling");

  // gør det muligt at klikke på bomb igen
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);
}

function givPoint() {
  console.log("Giv point");
  point++;
  console.log("har nu " + point + " point");
  visPoint();
}

function visPoint() {
  console.log("vis point");
  document.querySelector("#coin_count").textContent = point;
}

function mistLiv() {
  console.log("mist et liv");
  visMistetLiv();
  liv--;
}

function visMistetLiv() {
  document.querySelector("#heart" + liv).classList.remove("active_heart");
  document.querySelector("#heart" + liv).classList.add("broken_heart");
}