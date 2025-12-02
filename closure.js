function makeCounter() {
  let count = 0; 
  let a=1;
  function inc(){
    count++;
    return count;

  }
  function dec(){
    count--;
    return count;
    
  }
  return {inc , dec};
}

const counter = makeCounter();

console.log(counter.inc());
console.log(counter.dec()); 
console.log(counter.a); 
console.log(counter.inc()); 



