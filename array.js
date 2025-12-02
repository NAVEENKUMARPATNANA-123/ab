// let a=[1,2,3]
// for (let i of a){
//     console.log(i);
// }

// let b={
    
//     jhon: {
//         name: 'jhon',
//         age: 12,
//         gender: 'male'
//     },
//     rita: {
//         name: 'rita',
//         age: 32,
//         gender: 'male'
//     }
// };

// console.log(b.jhon['name']);
// // for (let i in b){
// //     console.log(i['name'])
// // }

let a=[{'title': 'go to gym', 'status': 'completed'},
    {'title':'go to office', 'status': 'not completed'}
];
console.log(a);
function add(task){
a.push({'title':task,'status': 'completed'});
}
function del (index){
a.splice(index, 1);
}
function show(){
    for ( let i of  a){
        console.log(i);
    }
    
}
function update(index){
    a[index].status='completed';
    console.log("updated");
}
add("food")
show()
update(1)
show()