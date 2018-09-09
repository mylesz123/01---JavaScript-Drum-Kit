document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//to stop the program from running
    audio.currentTime = 0;//to make sound replay everytime keydown e. is fired
    audio.play();
    key.classList.add('playing');
    //use transition end event to remove class

      function removeTransition(e){//removing css properties
        if(e.propertyName !== 'transform')return;
        this.classList.remove('playing');
    };

    const keyboard = document.querySelectorAll('.key');
    keyboard.forEach(key => key.addEventListener('transitionend',removeTransition));//have to loop over each item in array, cannot use addEventListener.
    console.log(key);
  });

});//end content loaded
