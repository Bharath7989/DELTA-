//EX:1
const student1={
    name:"Bharath",
    age:20,
    eng:90,
    math:95,
    phy:85,                             //ERROR:below read.
      getAvg(){                      //  This.js:8 Uncaught ReferenceError: eng is not defined
        let avg=(eng+math+phy)/3;    // at Object.getAvg (This.js:8:17)
          console.log(avg);          // at <anonymous>:1:10
        }                            //getAvg @ This.js:8
   }                                 //(anonymous) @ VM205:1
                                    
 

//EX:2
const student2={
    name:"Bharath",
    age:20,
    eng:90,
    math:95,
    phy:85,
      getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
      }
};

//EX:3
  function getAvgs(){
       console.log(this);
      }