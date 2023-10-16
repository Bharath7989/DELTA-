let inp=document.querySelector("input")
inp.addEventListener("keyup", function(){
  console.log(event);  //which returns the keyboard event object.
  console.log(event.key); //in this way we can access here
});