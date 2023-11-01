//here this is not actually example of inheritance this is more redundance like:
//here the teacher and the student contains the same properties like:name,age ...thats why 
//seee the inheritance2.js.
class Student{
    constructor(name,age,marks) {
     this.name=name,
     this.age=age,
     this.marks=marks
    };
  talk(){
    console.log(`hey this is ${this.name}`)
  }
}
class Teacher{
    constructor(name,age,sub) {
     this.name=name,
     this.age=age,
     this.sub=sub
    };
  talk(){
    console.log(`hey this is ${this.name}`)
  }
}
//the below obj for student class.
let s1=new Student("Bharath",20,90);
s1.talk();
console.log("This is Your Marks:",s1.marks)
let s2=new Student("Mahesh",22,80);

//the below obj for student class.
let t1=new Teacher("padma",20,90);
let t2=new Teacher("vasantha",22,80);