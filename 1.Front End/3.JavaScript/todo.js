let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

        btn.addEventListener("click",function(event){
            event.preventDefault();
   
        let li=document.createElement("li");

            li.innerHTML=input.value;
            let del=document.createElement("button");
            del.innerText="delete";
            del.classList.add("delete");
            if(input.value.length>=3){
            li.appendChild(del)
            ul.appendChild(li);
                 console.log("the task added")
            }
            else{
                alert("enter minimum 3characters to add the list")
            }
            input.value="";
})

// let delets=document.querySelectorAll("delete");

// for(dels in delets){
//     dels.addEventListener("click",function(){
//          event.preventDefault();
//        dels.parentElement.remove();
//     })

// }

ul.addEventListener("click",function(){
   console.log(event.target.nodeName);
   if(event.target.nodeName=="BUTTON"){
  event.target.parentElement.remove();
  console.log("Deleted successfully");
   }

})