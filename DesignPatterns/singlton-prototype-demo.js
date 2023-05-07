class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
              if(!Person.x){//truthy
                this.firstName=firstName;     //create object
                this.lastName=lastName;
                Person.x=this;
              }
              return Person.x;//if it's already their 
    }
}

const p1=new Person('john','Hopkines');
const p2=new Person('Edward','smith');
console.log(p1===p2);