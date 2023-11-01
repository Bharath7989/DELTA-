class Student{
  constructor(name,age,marks){
    this.name=name;
    this.age=age;
    this.marks=marks;
  };
  stu(){
    console.log("i can play,dance and more...!")
  }
}
let s1=new Student("Bharath","20",90);
console.log("name is :",s1.name);
console.log("age is:",s1.age);
console.log("marks is:",s1.marks);
s1.stu();