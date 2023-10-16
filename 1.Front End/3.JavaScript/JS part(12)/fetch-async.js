let url="https://catfact.ninja/fact";

async function getFact(){
    let res=await fetch(url);
    let data=await res.json();
    console.log("fact 1=",data.fact);

    //the below one is another fact.
    let res2=await fetch(url);
    let data2=await res2.json();
    console.log("fact 2=",data2.fact);
}
getFact();