const hero = document.querySelector(".tv-container");
const dwn_btn = document.getElementById("down-btn");
const up_btn = document.getElementById("up-btn");
const videos = document.querySelector("#video-container");

// T.V Switch On Animation
function tvswitch() {
  setTimeout(function () {
      document.getElementById('switch').style.display = 'none'}, 100);
  setTimeout(function () {
      document.getElementById('noise').style.display = 'none' }, 600);
  return false;
}

// home page scroll down btn 
dwn_btn.addEventListener("click", scrldown);
function scrldown() {
    hero.scrollBy(0, 40);
}
// home page scroll up btn 
up_btn.addEventListener("click", scrlup);
function scrlup() {
    hero.scrollBy(0, -40);
}


// Video next and previous script
dwn_btn.addEventListener("click", nextVdo);
function nextVdo() {
    videos.scrollBy(0, 335);
}

up_btn.addEventListener("click", preVdo);
function preVdo() {
    videos.scrollBy(0, -335);
}