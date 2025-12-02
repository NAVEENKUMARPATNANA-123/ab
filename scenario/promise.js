const arr=["apple","banana","grapes"];
const ar=validate(arr);
const a=val(arr);
Promise.allSettled([ar,a])
.then (function (ord){
    console.log("Success");
    return ord;
})
.then((ord)=> {
    console.log("Success");
    console.log(ord);
})
.catch(function (err){
    console.log("Error occurred",err);
})
function validate( arr){
    const a=new Promise(function (resolve,reject){
        const request=false;
        if (!request){
            const q=new Error("Sorry");
            reject(q);
        }
        else{
            resolve("Validated 1234");
        }
        
    })
    return a;

}
function val( arr){
    const a=new Promise(function (resolve,reject){
        const request=true;
        if (!request){
            const q=new Error("Sorry");
            reject(q);
        }
        else{
            resolve("Validated 1234");
        }
        
    })
    return a;

}

// const arr = ["apple", "banana", "grapes"];

// const ar = validate(arr);

// ar.then(function (ord) {
//     console.log("Success");
// })
// .catch(function (err) {
//     console.log("Error occurred:", err.message); // show error message
// });

// function validate(arr) {
//     return new Promise(function (resolve, reject) {
//         // Example: reject with an error
//         const q = new Error("Sorry");
//         reject(q);

//         // OR: resolve if valid
//         // resolve("Array is valid!");
//     });
// }
