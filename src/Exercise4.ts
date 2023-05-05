abstract class baseObject { 
    width:number=0; 
    length:number=0; 
 calcSize(){

 }
}
class rectangel extends baseObject{
     width:number; 
    length:number;
    constructor(width:number,length:number){
        super();
        this.width=width;
        this.length=length;
    }
calcSize():number { 
        return this.width * this.length; 
    } 
    
   
}

const x=new rectangel(5,2);
console.log(x.calcSize()); // 10

