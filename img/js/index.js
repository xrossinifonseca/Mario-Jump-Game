const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const newGame = document.querySelector(".btn-new");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");

let pontos = 0;

//Evento se o Mario acertar o Pipe

function lose() {
  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    if (pipePosition > 120 && marioPosition > 80) {
      score.innerHTML = pontos;
      // score.src = `img/${pontos}.png`;
    } else if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${pipePosition}px`;

      mario.src = "img/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "30px";
      newGame.style.display = "block";
      gameOver.style.display = "block";

      clearInterval(loop);
    }
  }, 10);
}
lose();

//Evento pra o mario pular
document.addEventListener("keydown", function () {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);

  pontos += 1;
});

//Reiniciar Game
const init = function () {
  pipe.style.animation = "";
  pipe.style.left = "";
  mario.style.animation = "";
  mario.style.width = "150px";
  mario.style.bottom = "0px";
  mario.src = "img/mario.gif";
  newGame.style.display = "none";
  gameOver.style.display = "none";
  pontos = 0;
  score.innerHTML = 0;

  lose();
};
newGame.addEventListener("click", init);
