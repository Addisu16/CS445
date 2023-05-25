function getStrLength(str,number){
    return new Promise((resolve,reject)=>{
           if(str.length!==undefined){
            setTimeout(()=>{
             resolve(str.length);
           },number)
        }else{
           setTimeout(()=>{
            reject('the givenvalue is not a string');
        },number)    
        }
    })
}
getStrLength('Hello',2000).then(data=>console.log(data))
.catch(error=>console.log(error));