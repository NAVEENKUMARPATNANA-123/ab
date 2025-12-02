//FUNCTIONS
       
    //    //function declaration
    //     function abc(param1,param2){
    //         return (param1+param2)*0.1;
    //     }
    //     console.log(abc(50,100));

    //     //function expression

    //     const a=function x(param1,param2){
    //         return (param1+param2)*0.1;
    //     }

    //     console.log(a(100,50));

    //     //arrow function

    //     const arr=(param1,param2)=>( (param1+param2)*0.1);
    //     console.log(arr(100,50));
//Closures
    function cls(){
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
    let cnt=cls();
    console.log(cnt.inc());
    console.log(cnt.dec());
    console.log(cnt.inc());
    console.log(cnt.inc());
    

