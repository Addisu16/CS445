// console.log('start');
// async function fun(){
//     return 1;
// }

// fun().then(data=>console.log(data));
// console.log('end');















/*console.log("=============================")

console.log('start');

async function foo(){
    return 'done';
}
async function bar(){
    console.log('inside-bar-start');
    let result=await foo();
    console.log(result);
    console.log('inside bar-end');

}
console.log('end');
bar();
console.log('before-end');*/


//output


//====
//start
//end
//inside-bar start
//before-end
//done
//inside-bar end



/*async function foo1(){
    return 'done';
}

function bar1(){
    let result =await foo1();
    console.log(result)
}
bar1();*/


//output
//done






/*async function foo3(){
    return 'done';
}

let result=await foo3();
console.log(result);*/










// async function thisThrows(){
//     throw new Error('thrown from thisThrows()');
// }
//async function foo(){
// try{
//     await thisThrows();
// }catch(e){
//     console.log('error');
//     console.error(e)
// }finally{
//     console.log('we do cleanup here');
// }

/*console.log('start');
const myPromise=new Promise(resolve=>resolve('done'));

function firstFunction(){
    //myPromise.then(res=>console.log(res));//done
    console.log('first');
}

async function secondFunction(){
   console.log(await myPromise);//done
    console.log('second');

}
firstFunction();
secondFunction();
console.log('end');*/


/*console.log('start');
const result=new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(()=>reject('whoops'),1000);
    
    console.log(2);
})
.then(res=>console.log(res))
.catch(error=>console.log(error));
//console.log('you');
console.log(result);
console.log('end');*/


//output

//start
//1
//2
//promise{pending}
//end





// console.log('start');
// const promise1=new Promise((resolve,reject)=>{
//     console.log(1);
//     setTimeout(() => {
//         console.log('timerStart');
//         resolve('success');
//         console.log('timerEnd');
//     }, 5000);
//     console.log(2);
// });

// promise1.then((res)=>{
//     console.log(res);
// });

// console.log('end');









// console.log(promise1);





console.log('start');
async function f(){
    return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            reject ('Done')},1000)
        });
       
    }

async function bar(){
console.log(await f());



}

f();
console.log('end');
