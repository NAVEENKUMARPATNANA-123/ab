// console.log(add(5, 3)); 
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 4)); 

// const multiply=(a,b) => a*b;
// console.log(multiply(6,7))

// const abc=function xyz(n){
//     if (n==0){
//         return 1;
//     }
//     else{
//         return n*xyz(n-1); 
//     }
    
// }
// console.log(abc(5));

// const add=(a,b)=> {
//     return a+b;
// }
// console.log(add(7,8));

// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback(); 
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayBye);
// (function() {
//     console.log("This is a self-invoking function!");
// })();


let cart = [100, 200, 50]; 
let taxRate = 0.1; 

let cost=(cart,taxRate)=> {
    let sum=0;
    for (let i of cart){
        sum+=i;
    }
    return sum*taxRate;
}
console.log(cost(cart,taxRate));