function counter(){
    let count=0;
    function inc(){
        count++;
        return count;
    }
    function dec(){
        count--;
        return count;
    }
    return {inc,dec};
}

const counter1 =counter();
console.log(counter1.inc());
console.log(counter1.dec());
console.log(counter1.inc());
