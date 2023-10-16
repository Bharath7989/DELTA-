let url="https://icanhazdadjoke.com/";
async function getFact(){
    //the below one is object which is created for headers for api's
    //because in some times api will may return html data that's why for js data we use this.
    let config={headers:{Accept:"application/json"}}
    let req=await axios.get(url,config);
    console.log(req.data.joke);
}