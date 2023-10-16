const movie="Avatar";
let guess=prompt("Enter the movie name");
while (guess!="Avatar" && guess!="quit") {
    guess=prompt("wrong guess please try again..!");
}
if(guess=="Avatar"){
    console.log("Your guess is correct congratulations...!");
}
else{
    console.log("You quit");
}