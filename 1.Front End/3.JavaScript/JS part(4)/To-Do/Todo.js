let todo=[];
//taking the request from user.
let req=prompt("enter the task that need to perform.");
while(true){
    if(req=="quit"){
        console.log("You quit from here.");
        break;
    }
    else if(req=="add"){
        let task=prompt("enter that you want to add.")
        todo.push(task);
        console.log("the task is added.")
    }
    else if(req=="list"){
        console.log("------------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------")

    }
    else if(req=="delete"){
        let ind=prompt("Enter the index that you want to delete.");
        todo.splice(ind,1);
    }
    else {
        console.log("wrong input.")
    }
req=prompt("Please enter your request.")
}