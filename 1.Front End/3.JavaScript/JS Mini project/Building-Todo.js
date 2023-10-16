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


//selecting all the delete buttons
let delbtns=document.querySelectorAll(".delete");
for( let delbtn of delbtns){  //for travelling all delete buttons.
      delbtn.addEventListener("click",function(){
      let par=delbtn.parentElement;  //here delbtn's parentElement storing in par variable.
      par.remove(); //removes the par variable.
      console.log("The task is deleted")
      })
}

//But here is the one problem is this delete operation is performs only on existing elements only not for new elements which we are adding.
//so here it is not apply the delete operation on newly entering tasks
//so go to check in Building -Todo 2