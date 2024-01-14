const mongoose=require('mongoose');
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Practice');
}
main().then((res)=>{
    console.log("successfully running...!");
})
.catch((err)=>{
    console.log("filed try again");
})

const booksSchema=new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        
    }
})

const Book=mongoose.model("Book",booksSchema);
// const book1=new Book({
//     tittle:"nalanda",
//     author:"shivaji",
//     price:25,
// })
// book1.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

Book.find({price:23}).then((res)=>{
    let arr=res;
    for(ar of arr){
        console.log(ar.author);
    }
})
.catch((err)=>{
    console.log(err);
})

// FOR UPDATING
// Book.updateMany({price:23},{price:30}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// FOR DELETING
// Book.deleteMany({author:"Bharath"}).then((res)=>{
//     console.log("deleted");
// })
// .catch((err)=>{
//     console.log("not deleted");
// })
