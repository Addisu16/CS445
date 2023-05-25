// function getStringLength(str, number) {
//     return new Promise(function (reject, resolve) {
//         if(str.length !== undefined){
//         setTimeout(() => {
//             resolve(str.length);
//         }, number);

//     }else {
//         setTimeout(() => {
//             reject('The given value is not a string');
//         }, number);

//     }

// })
// }
// getStringLength('hello', 2000).then(res => console.log(res), error => console.log(error));


function findIndex1(arr, findthisNum, number) {

    return new Promise(function (reject, resolve) {
        setTimeout(() => {
            let index = arr.indexOf(findthisNum);
            if (index !== -1) {

                resolve(index);
            } else {

                reject('The given value is not a string');
            }
        }, number);

    })

}

findIndex1([1, 2, 3, 4, 5, 6], 6, 1000).then(res => console.log(res), error => console.log(error));