
setTimeout(() => {
const isPrime = num=>new Promise((resolve,reject)=>{
   
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) {
            resolve(false);
        }else{
            reject(true);
        }
   
    })

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');
}, 500);

// Output:
// start
// end
// { prime: true }