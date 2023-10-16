let url="https://catfact.ninja/fact";

fetch(url).then((res)=>{
    let data=res.json()
    data.then((data=>{
    console.log(data.fact) ;
    }))
})

// we can also write the above code as shown in below
fetch(url).then((res)=>{
    return res.json()  
})
.then((data=>{
    console.log(data.fact);
}))
