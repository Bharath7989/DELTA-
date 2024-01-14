// This is all about new operator in js which is not but efficient.
  function Student(name,age,marks){
    this.name=name;
    this.age=age;
    this.marks=marks;
  };
  Student.prototype.stu=function(){
    console.log(`hi my name is ${this.name}`)
  }

let s1=new Student("Bharath","20",90);
console.log("name is :",s1.name);
console.log("age is:",s1.age);
console.log("marks is:",s1.marks);
s1.stu();
let s2=new Student("sai","2",98);
console.log("name is :",s2.name);
console.log("age is:",s2.age);
console.log("marks is:",s2.marks);