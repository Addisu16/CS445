const car={
    name:'Toyota',
     drive:function()
     {
        console.log(`${this.name}I can drive this ${this.model} model`);

    },
    honk:function(){
        console.log('Beep beep');
    }
}

const mycar=Object.create(car);
mycar.model=2011;//I can add a new property

mycar.name='BMW';//i can override the car property

mycar.drive();