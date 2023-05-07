function f(){
    console.log('foo');

}

//module pattern-immediately executed function expression

const moduleis=(function(){
    let counter=0;
    function incrementCounter(){
        counter++;
        }
        return {
            increment:incrementCounter,
           
            getCounter:function(){
                return counter;
            }
        }
})();

moduleis.increment();
moduleis.increment();
moduleis.increment();
console.log(moduleis.getCounter());



