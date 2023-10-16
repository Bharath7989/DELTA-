//This is for paragraph
let p=document.createElement('p');
p.innerText="Hey i'm red";
let body=document.querySelector('body');
body.append(p);
p.style.color="red"

//This is for heading tag h2
let h2=document.createElement('h2');
h2.innerText="I'm blue";
body.append(h2);
h2.style.color="blue";

//This is for div
let div=document.createElement('div');
let h1=document.createElement('h1');
let p2=document.createElement('p');
h1.innerText="I'm in a div";
p2.innerText="Mee too...!";
div.appendChild(h1);
div.appendChild(p2);
div.classList.add("box");
body.prepend(div);