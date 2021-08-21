// / ..............Memory  Part........................


function verifyMemoryCost(isAdd) {
    const memoryCost = document.getElementById("memory-cost");
    const memoryCostText = memoryCost.innerText;
    const memory = parseFloat(memoryCostText);

    if (isAdd == true) {
        memoryCost.innerText = 0;


    }
    else {
        memoryCost.innerText = 180;
        
    }

}





//..................Delivery option......................
function deliveryOption(isDelivery) {
    const deliveryCost = document.getElementById("delivery-charge-cost");
    const deliveryCostText = deliveryCost.innerText;
    const delivery = parseFloat(deliveryCostText);
    if (isDelivery == true) {
        deliveryCost.innerText = 0;



    }
    else {
        deliveryCost.innerText = 20;

    }
}

function totalPrice() {
    const totalCost = document.getElementById("total-price");
    var total = 1299;
    const memoryCost = document.getElementById("memory-cost");
    let memoryCostTeext = memoryCost.innerText;
    const storageCostt = document.getElementById("storage-cost");
    let storageCostText = storageCostt.innerText;
    const deliveryCostt = document.getElementById("delivery-charge-cost");
    let deliveryCostTeext = deliveryCostt.innerText;

    total += parseInt(memoryCostTeext) + parseInt(storageCostText) + parseInt(deliveryCostTeext);
    totalCost.innerText = total;
    
}

//................. storage part................



document.getElementById("256gb-storage").addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    const storageCostText = storageCost.innerText;
    const stroage = parseFloat(storageCostText);
    storageCost.innerText = 0;
    totalPrice();



})
document.getElementById("512gb-storage").addEventListener("click", function () {

    const storageCost = document.getElementById("storage-cost");
    const storageCostText = storageCost.innerText;
    const storage = parseFloat(storageCostText);
    storageCost.innerText = 100;
    totalPrice();




})
      
document.getElementById("1TB-storage").addEventListener("click", function () {
    const storageCost = document.getElementById("storage-cost");
    const storageCostText = storageCost.innerText;
    const stroage = parseFloat(storageCostText);
    storageCost.innerText = 180;
    totalPrice();

})







document.getElementById("8gb-memory").addEventListener("click", function () {
    verifyMemoryCost(true);
    totalPrice();



}
)
document.getElementById("16gb-memory").addEventListener("click", function () {

    verifyMemoryCost(false);
    totalPrice();



})


document.getElementById('free-delivery').addEventListener("click", function () {
    deliveryOption(true);
    totalPrice();



})
document.getElementById("payable-delivery").addEventListener("click", function () {
    deliveryOption(false);
    totalPrice();





})
        //...............Bonus Part...........................

document.getElementById("apply-button").addEventListener("click", function () {
    const userFiled = document.getElementById("promo-code");
    console.log(1);
    const totalPrice=document.getElementById("total-price");
    const user = userFiled.value;
    if (user == "stevekaku") {
       
       const totalValue=totalPrice%20;
        const discount=document.getElementById("discount");
        discount.value=totalValue;



    }
}
)
// document.getElementById("login-button").addEventListener("click",function(){
//     const mailField=document.getElementById("email-button");
//     const emailUser=mailField.value;
   
    
//     const passFiled=document.getElementById("password-button");
//     const passSubmit=passFiled.value;
//   if(emailUser=="abc@gamil.com" && passSubmit=="abc"){
//       window.location.href='banking.html'

//   }
// })


