window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører!");

  // Start animationer
  document.querySelector("#coin1_container").classList.add("falling");

  // Registrer click
  document.querySelector("#coin1_container").addEventListener("click", clickCoin);
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