let dodger = document.getElementById("dodger");
let game = document.getElementById("game");
let maxRight = game.clientWidth - dodger.clientWidth;

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers,10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// radix is the base number. 10 converts a decimal into a whole

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers,10);

    if (left < maxRight) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });