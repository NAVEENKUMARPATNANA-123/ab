function saveProfile() {
      let name=document.getElementById("name").value;
      var age=document.getElementById("age").value;
      let priceInput=document.getElementById("price").value;

      var discountRate=0.1;
        let price=Number(priceInput);
        var finalprice=price-(price*discountRate);
    document.getElementById("output").innerHTML= `Name: ${name} Age : ${age} final price:${finalprice}`;
    }
