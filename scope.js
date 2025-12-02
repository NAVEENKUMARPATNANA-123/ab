// var a=10;//global scope
// function abc(){
//     console.log(a);
//     var a=23; //local scope
//     console.log(a);
// }
// abc();
// console.log(a);
function makeCounter() {
  let count = 0;  
  return function() {  
    count++;
    return count;
  };// closure
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter()); 
