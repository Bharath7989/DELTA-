//the below is js object
let student={
    name:"Bharath",
    group:"mpcs",
    clas:12,
    year:3,
    college:"nalanda Degree college"
};

//the below is converting from js object to json obj.
let jsons=JSON.stringify(student);
console.log(jsons);
console.log('The below is accessing')
//now the below is converting form json obj to js obj.
let newJs=JSON.parse(jsons);
console.log(newJs.name);
console.log(newJs.college);