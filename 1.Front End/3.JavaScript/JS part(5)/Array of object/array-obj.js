const info=[
  {
    name:"aman",
    grade:"A+",
    city:"Delhi"
  },
  {
    name:"shraddha",
    grade:"A",
    city:"Haryana"
  },
  {
   name:"karan",
   grade:"O",
   city:"mumbai"
  }
];
console.log(info[1]);
console.log(delete info[2]); //here deleted the 2nd index.
// The below case is added new array element i.e new index 
console.log(info[3]={
    name:"Bharath",
    grade:"O",
    city:"Mumbai"
}
)
console.log(info);
console.log(info[3].name);