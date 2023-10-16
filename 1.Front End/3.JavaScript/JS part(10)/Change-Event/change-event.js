//change event

let form1=document.querySelector("#form1");
form1.addEventListener("submit",function(){
    event.preventDefault();
});
let user1=document.querySelector("#user1");
user1.addEventListener("change",function(){  //here "change" this gives the final state it not shows for individual changes.
    console.log("input changed");
    console.log("final value=",this.value);
})

//input event

let form2=document.querySelector("#form2");
form2.addEventListener("submit",function(){
    event.preventDefault();
});
let user2=document.querySelector("#user2");
user2.addEventListener("input",function(){  //here "input" this gives the initial or individual state it  shows for individual changes.

    console.log(user2.value);
})