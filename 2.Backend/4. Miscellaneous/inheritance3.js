class Mamal{   //Base class
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log("i can eat.....!");
    }
} 
class Dog extends Mamal{  //Child class
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woorf........");
    }
    //the below one is overriding. check by uncommenting.. 
    // eat(){
    //     console.log("dog can eat.....!");
    // }
}
class Cat extends Mamal{ //Child class
    constructor(name){
        super(name);
    }
    meow(){
        console.log("woorf........");
    }
}
let d=new Dog("jerman-shephered");
d.eat();