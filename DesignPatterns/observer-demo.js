//observers in class

class Subject{
    constructor(){
        this.observerList=[];//[ob1,ob2]
    }
    subscribe(observer){
        this.observerList.push(observer);
    }
    notify(message){
        this.observerList.forEach(functio=>functio(message));
    }
    unsubscribe(observer){
       this.observerList=this.observerList.filter(item=>item!==observer);
    //    const observerIndex = this.observerList.indexOf(observer);
    //    if (observerIndex !== -1) {
    //      this.observerList.splice(observerIndex, 1);
    //    }
       
        // this.observerList=this.observerList.findIndex(observer);
        // this.observerList.splice(observer,1);
    }
}
const facebook=new Subject();
//1. observer-> a function
function ob1(message){
    console.log(`user 1 subscribed ${message}`);
}
function ob2(message){
    console.log(`user 2 subscribed ${message}`);
}
facebook.subscribe(ob1);
facebook.subscribe(ob2);
facebook.unsubscribe(ob1);
facebook.notify(`,due to this you will get 10% discount`);



