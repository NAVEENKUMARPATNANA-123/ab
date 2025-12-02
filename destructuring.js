const fruits = ["Apple", "Banana", "Cherry","abc"];

// const [firstFruit, thirdFruit] = fruits;
// console.log(firstFruit); // Apple
// console.log(thirdFruit); // Banana

// // Skipping values
// const [, third] = fruits;
// console.log(third); // Cherry

// const [a, b, ...r] = fruits;
// console.log(a); 
// console.log(b); 
// console.log(r); 

// // Swapping values
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log(x); // 2
// console.log(y); // 1

const obj1 = { "theme":"dark","default":"chrome" };
const obj2 = { "theme":"light","default":"browser" };
const mergedObj = { ...obj1, ...obj2 }; 
console.log(mergedObj);