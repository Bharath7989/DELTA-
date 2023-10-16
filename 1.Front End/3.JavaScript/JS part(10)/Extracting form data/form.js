//THIS IS ALL ABOUT EXTRACTING THE FORM DATA.

let inp=document.querySelector("input");
console.dir(inp) //which prints the object of that element..
console.log(inp.value="7989755974");       
inp.style.backgroundColor="red";

//ANOTHER WAY.
let form=document.querySelector("#form");
form.addEventListener("submit",function(){
    event.preventDefault(); //which stops the redirecting the form data.
    console.dir(form); //which gives the object for that element.
    
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);
    alert(`The username "${user.value}" and password "${pass.value}" `)
});