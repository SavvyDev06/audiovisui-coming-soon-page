//Code courtesy of this amazing codepen: https://codepen.io/raqsqnhj/pen/wvrgpvw
//Also check out: https://codepen.io/arickle/pen/XKjMZY and https://codepen.io/victoriaNine/pen/mJmWvE
function meteor() {
  let amount = 150;
  let body = document.querySelector("body");
  let count = 0;

  while (count < amount) {
    let drop = document.createElement("i");

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 15;

    drop.style.width = `${0.1 + size}px`;
    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;

    body.appendChild(drop);
    count++;
  }
}

export default meteor;
