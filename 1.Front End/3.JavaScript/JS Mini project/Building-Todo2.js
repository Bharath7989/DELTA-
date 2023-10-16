let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

//the below is created for when we click at button then it create a task.
btn.addEventListener("click",function(){
    console.log("The task added");
    // creating a "li" element so that we can add li in ul.
  let li=document.createElement("li");  
  li.innerHTML=input.value; //here whatever taking from input it's value is stored in li as innerText.
 
//creating  delete button.
 let del=document.createElement("button");
 del.innerText="delete"; // here added a name as delete for that button.
 del.classList.add("delete"); //and added the class name as "delete".
 li.appendChild(del); //appending "delete" button in (li) as a child element
  ul.appendChild(li); //appending li in ul after the completion of the process
  input.value=""  ;  //auto clear input's search bar after the completion of the process.
});
 

ul.addEventListener("click",function(){
    console.log(event.target.nodeName); // for triggering the element
    if(event.target.nodeName=="BUTTON"){
     event.target.parentElement.remove()
     console.log("deleted Successfully")
    }
})