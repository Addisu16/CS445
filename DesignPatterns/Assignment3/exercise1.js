
class Regular{
    constructor(){
        this.color='blue';
    }
}

class Energy{
    constructor(){
        this.color='red';
    }

}

class Factory{
    createBulb(type,color){
        let bulbs;
        if(type==='regular'){
            bulbs=new Regular();
        }else if(type==='energy'&& color==='red'){
            bulbs=new Energy(color);
        }
        bulbs.type = type;
        return bulbs;
    }

}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
