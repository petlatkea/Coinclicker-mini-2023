window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører!");

  startAlleAnimationer();
  
  // Registrer click
  document.querySelector("#coin1_container").addEventListener("click", coinClicked);
  document.querySelector("#coin2_container").addEventListener("click", coinClicked);
  document.querySelector("#coin3_container").addEventListener("click", coinClicked);
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);
}

function startAlleAnimationer() {
  // Start falling animationer
  document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#coin2_container").classList.add("falling");
  document.querySelector("#coin3_container").classList.add("falling");
  document.querySelector("#bomb_container").classList.add("falling");
  document.querySelector("#heart_container").classList.add("falling");

  // Sæt position klasser
  document.querySelector("#coin1_container").classList.add("position1");
  document.querySelector("#coin2_container").classList.add("position2");
  document.querySelector("#coin3_container").classList.add("position3");
  document.querySelector("#bomb_container").classList.add("position4");
  document.querySelector("#heart_container").classList.add("position5");
}

function coinClicked() {
  console.log("Click coin");
  // Brug en coin variabel i stedet for gentagne querySelectors
  const coin = this;// document.querySelector("#coin1_container");

  // Forhindr gentagne clicks
  coin.removeEventListener("click", coinClicked);
  
  // Stop coin container
  coin.classList.add("paused");

  // sæt forsvind-animation på sprite
  coin.querySelector("img").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  coin.addEventListener("animationend", coinGone);  
}

function coinGone() {
  console.log("coin gone");
  // Brug en coin variabel i stedet for gentagne querySelectors
  const coin = this;//document.querySelector("#coin1_container");
  // fjern event der bringer os herind
  coin.removeEventListener("animationend", coinGone);

  // fjern forsvind-animation på sprite
  coin.querySelector("img").classList.remove("zoom_out");
  
  // fjern pause
  coin.classList.remove("paused");

  // genstart falling animation
  coin.classList.remove("falling");
  coin.offsetWidth;
  coin.classList.add("falling");

  // fjern alle positioner
  coin.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random()*5);
  coin.classList.add(`position${p}`);

  // gør det muligt at klikke på coin igen
  coin.addEventListener("click", coinClicked);
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

  // gør det muligt at klikke på coin igen
  document.querySelector("#bomb_container").addEventListener("click", clickBomb);
}