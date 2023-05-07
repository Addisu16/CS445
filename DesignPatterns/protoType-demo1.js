function School(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;


    
    this.getFirstName=function(){
       return this.firstName;
    }
}

School.prototype.getFirstName=function(){
    return this.firstName;
}


const stu1=new School("Wini","Engidawork");
console.log(stu1.getFirstName());
const stu2=new School("Addis","Alemayehu");
console.log(stu2.getFirstName());