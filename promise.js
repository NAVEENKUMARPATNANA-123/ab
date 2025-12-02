let burgerOrder = new Promise((resolve, reject) => {
  let burgerReady = false; 
  if (burgerReady) {
    resolve("Here’s your food!");
  } else {
    reject("Sorry, we’re out of burgers ");
  }
});
burgerOrder
  .then(result => console.log(result))   // if success
  .catch(error => console.log(error))   // if fail
  .finally(() => console.log("Order finished "));

