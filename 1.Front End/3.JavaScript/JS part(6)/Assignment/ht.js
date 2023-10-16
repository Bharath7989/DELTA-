let country = ["Australia is belongs to Bharath Goud", "Germany", "United States ofAmerica"];
 let ansInd=0;
 for(let i=0;i<country.length;i++){
   let anslen=country[ansInd].length;
   let currLength=country[i].length;
     if(currLength>anslen){
        ansInd=i;
     }
 }
 console.log(country[ansInd])
