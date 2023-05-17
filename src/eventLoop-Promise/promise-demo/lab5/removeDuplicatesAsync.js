Array.prototype.removeDuplicatesAsync=async function(){
   const newArr=await new Promise(resolve=>{
        setTimeout(() => {
            const newArr=[...new Set(this)];
            resolve(newArr);
        }, 0);
    })
    .catch(error=>{console.log(error)});
console.log(newArr);

};

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]