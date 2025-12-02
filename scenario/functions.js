function abc(items){
    let total=0;
    for ( let i of items){
        total+=i;
    }
    const tax=0.1;
    let amount=total+(tax*total);
    console.log("Amount is "+amount);
}
abc([1,2,3]);