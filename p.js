// Create empty Map
const map = new Map();

// Create Map with initial values
const userMap = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["isAdmin", true]
]);

console.log(userMap);


const a= new Map([['a',1]
,['b',2]])
console.log(a)

a.set('c',2)
console.log(a)

let numbers = [10, 15, 20, 25, 30];
const even = numbers.filter(num => num % 2 === 0);

console.log(even); 

numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); 
numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); 

const nums = [1, 2, 3];
console.log(...nums); 

const [first, ...others] = nums;
console.log(others); 



function abc(){
    return new Promise((resolve,reject)=>{
        const a=false
        if (a){
            resolve("allow");
        }
        else{
            reject("Error")
        }
        
    })
}

abc().then((data)=>{console.log(data)})
.catch((err)=>{
    console.log(err)
})

async function m() {
    try{const a= await abc()
        console.log(a)
    }
    catch(err){
        console.log(err)
    }

}
m()

let z=[1,2,3]
for ( let i of z){
    console.log(i)
}

let x={'a':1,'b':2}
for (let j in x){
    console.log(j)
}

let v=z.map(num=>num*2)
console.log(v)

let s=z.filter(num=>num%2==0)
console.log(s)

let w=z.reduce((acc,num)=>acc+num,0)
console.log(w)



let r=[1,2,3]
r.push(5)
r.unshift(1)
console.log(r)

{let [b,...c]=r
console.log(b)}

let b=[1,2,...r]
console.log(b)