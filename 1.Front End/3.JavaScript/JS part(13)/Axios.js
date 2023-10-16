let url="https://catfact.ninja/fact";

async function getFact(){
  let res=await axios.get(url);
  console.log(res.data.fact);

  //this is another fact
    let res2=await axios.get(url);
  console.log(res2.data.fact);
}
getFact();