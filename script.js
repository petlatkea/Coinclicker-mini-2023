window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører!");

  document.querySelector("#coin1_container").addEventListener("click", clickCoin);

}

function clickCoin() {
  console.log("Click coin");
  // Stop coin container
  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin1_sprite").classList.add("zoom_out");

}