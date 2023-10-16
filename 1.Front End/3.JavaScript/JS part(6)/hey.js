let a=["Hellohowis","How","are","You Baby"];
let len=a[0].length;
// console.log(len)
for(let i=0;i<a.length;i++){
   if(a[i].length>len){
    len=a[i].length;
   }
}
console.log(len);