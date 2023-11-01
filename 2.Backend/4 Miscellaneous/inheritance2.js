//the below one is the perfect example for inheritance.
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
    console.log(`hey this is ${this.name}`)
  }
}
class Student extends Person{
    constructor(name,age,marks) {
    super(name,age); //parent class constructor is being called
     this.marks=marks
    };
  
}
class Teacher extends Person{
    constructor(name,age,sub) {
     super(name,age);  //parent class constructor is being called
     this.sub=sub;
    };
}
let t1=new Teacher("Bharath",20,"cs");
t1.talk()
console.log(`hey this is ${t1.sub}`)