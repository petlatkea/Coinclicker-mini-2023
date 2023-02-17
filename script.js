window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører!");

  document.querySelector("#coin1_container").addEventListener("click", clickCoin);

}

function clickCoin() {
  console.log("Click coin");
}