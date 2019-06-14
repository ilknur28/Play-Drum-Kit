var drumButtonsLength = document.querySelectorAll(".drum").length;

 //Detecting mouseclick over the buttons

for (var i = 0; i < drumButtonsLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //Using Anonymous function to play the sounds of the instruments.

    var clickedButton = this.innerHTML;
 makeSound(clickedButton);
 buttonAnimation(clickedButton);
  });
}

// Detecting keyboard press

document.addEventListener("keydown", function (){
  var keypressed = event.key;
 makeSound(keypressed);
 buttonAnimation(keypressed);
});

// Function to make sound

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:console.log(clickedButton);
}
}
//Function for animations
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);

}
