const animatedKeys = document.querySelectorAll(`.key`);

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let keyButton = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    keyButton.classList.add("playing");
}

/**
 * Normalizes css properties
 * @param {Event} e 
 */
function onTransformEnd(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

animatedKeys.forEach(animatedKey => 
    animatedKey.addEventListener("transitionend", onTransformEnd)
);

window.addEventListener("keydown", playSound);