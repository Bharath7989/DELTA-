let name=["Bharath","Sai","Sravan","Gopi","Vijay","Vinay"];
// PUSH
console.log(name.push("karan"));
console.log(name);

//POP
console.log(name.pop());
console.log(name);

//UNshift
console.log(name.unshift("Sathya"));
console.log(name);

//Shift
console.log(name.shift());
console.log(name);



// Pracice Qs
console.log("Practice Qs");
let start=["january","july","march","august"];
console.log(start);
console.log(start.shift());
console.log(start.shift());
console.log(start.unshift("June"));
console.log(start.unshift("july"));
console.log(start);


// IndexOf()
console.log("IndexOf method")
let primary=["red","yellow","blue"];
console.log(primary.indexOf("yellow"));

// Includes()--->search for a value
console.log("includes method");
console.log(primary.includes("blue"));

//arrayConcatenation.
console.log("arrayConcatenation")
let one=["red","green","blue"];
let two=["orange","pink","purple"];
 console.log(one.concat(two));
 

 //arrayReverse
console.log("arrayReverse") 
let three=["red","green","blue"];
console.log(three.reverse());

// Slice array
console.log("Slice array");
let color=['red', 'green', 'blue', 'orange', 'pink', 'purple'];
console.log(color.slice(3));
console.log(color.slice(2,5));
console.log(color.slice(-2));

//Splice in array]
// splice:removes|replace|add elements in a place.
console.log("Splice in array");
let car=["bmw","kia","maruti","ferrari","xuv"];
console.log(car.splice(4)); //here deleted the 4th index's element.i.e "xuv"
console.log(car.splice(2,3)); //here deleted the cars from  2nd index to 3rd index.
console.log(car.splice(0,0,"bugatti","labmborghini")); //finally the elements are  ("bugatti","labmborghini","bmw",kia")
console.log(car.splice(1,0, "RollsRoyce")); //RollsRoyce is added on 1st index.  ("bugatti","RollsRoyce","labmborghini","bmw","kia")
console.log(car.splice(2,2,"Mercedes")); //['bugatti', 'RollsRoyce', 'Mercedes', 'kia']