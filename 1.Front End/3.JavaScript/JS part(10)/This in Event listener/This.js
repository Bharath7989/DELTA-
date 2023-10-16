let btn=document.querySelector("button");
btn.addEventListener("mouseenter",function(){
    console.log(this.innerText);  //This prints button element in the console screen.
    this.style.color="red";  //which changes the color for this element.
    this.style.backgroundColor="black";
    console.log("The below one is the object of this button")
    console.dir(this)
});
