const mario = document.querySelector(".Mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")
const gameOverText = document.querySelector(".game-over")

function Jump() {
  mario.classList.add("Jump")
 setTimeout(()=> {
   mario.classList.remove("Jump")
 }, 500)
}

document.addEventListener("keydown", Jump)


const loop = setInterval(()=>{
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft
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

    clouds.style.left = `${cloudsPosition}px`
    gameOverText.classList.add("on")


    clearInterval(loop)

  }

}, 10)




function restart() {
  document.location.reload()
}