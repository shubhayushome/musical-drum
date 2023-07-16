var items=["./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3","./sounds/snare.mp3","./sounds/crash.mp3","./sounds/kick-bass.mp3"]
$(".drum").click(function () {
  var but=this.innerHTML;
  makeSound(but);
  makeAnimation(but);
})
document.addEventListener("keypress",function (event) {
  var but=event.key;
  makeSound(but);
  makeAnimation(but);
});
function makeSound(but)
{
  switch (but) {
    case "w":   var audio=new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
    case "a":   var audio=new Audio("./sounds/tom-2.mp3");
                            audio.play();
                            break;
    case "s":   var audio=new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
    case "d":   var audio=new Audio("./sounds/tom-4.mp3");
                            audio.play();
                            break;
    case "j":   var audio=new Audio("./sounds/snare.mp3");
                                        audio.play();
                                        break;
    case "k":   var audio=new Audio("./sounds/crash.mp3");
                                                    audio.play();
                                                    break;
    case "l":   var audio=new Audio("./sounds/kick-bass.mp3");
                   audio.play();
                      break;
    default: console.log("No sound");

  }
}
function makeAnimation(but) {
  var activebut=document.querySelector("."+but);
  activebut.classList.add("pressed");
  setTimeout(function(){ activebut.classList.remove("pressed"); },100);

}
