const mario = document.querySelector(".Mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")
const clouds2 = document.querySelector(".clouds2")
const gameOverText = document.querySelector(".game-over")
const gameDisplay = document.querySelector(".Game-Display")
const floor = document.querySelector(".floor")
const floor2 = document.querySelector(".floor2")

function Jump() {
  mario.classList.add("Jump")
 setTimeout(()=> {
   mario.classList.remove("Jump")
 }, 500)
}

window.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
    case 32: Jump();
    break;
    case 74: Jump();
    break;
    case 82: restart();
    break;
    case 116: 
    console.log("");
    break;
  }
})

const loop = setInterval( ()=> {

  const pipePosition = pipe.offsetLeft;

  const cloudsPosition = clouds.offsetLeft
  const clouds2Position = clouds2.offsetLeft

  const floorPosition = floor.offsetLeft
  const floor2Position = floor2.offsetLeft

  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px` 
    
    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition }px`

    mario.src = "assets/game-over.png"
    mario.style.width = "80px"
    mario.style.left = "40px"

    clouds.style.animation = "none"
    clouds2.style.animation = "none"
    floor.style.animation = "none"
    floor2.style.animation = "none"

    clouds.style.left = `${cloudsPosition}px`
    clouds2.style.left = `${clouds2Position}px`
    floor.style.left = `${floorPosition}px`
    floor2.style.left = `${floor2Position}px`
    

    gameOverText.classList.add("on")

    gameDisplay.style.animation = "none"

    clearInterval(loop)
  }
}, 10)

function restart() {
  document.location.reload()
}