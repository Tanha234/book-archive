function updateProductNumber(product,price,isIncreasing){
  const caseInput=document.getElementById(product+ "-number");
  let productNumber=caseInput.value;

  if(isIncreasing==true)
  {
      productNumber=parseInt(productNumber)+1;
  }
  else if(productNumber>0){
      productNumber=parseInt(productNumber)-1;
  }
 caseInput.value=productNumber;

      const productTotal=document.getElementById(product+ "-total");
      productTotal.innerText=productNumber*price;

      calcaulateTotal();
  }
  function getInputValue(product){
      const productInput=document.getElementById(product+ "-number");
       const productNumber=productInput.value;
       
       return productNumber;
  }
  function calcaulateTotal(){
      const phoneTotal=getInputValue('phone')*1219;
      const caseTotal=getInputValue("case")*59;
      const subTotal=phoneTotal+caseTotal;
      const tax=subTotal/10;
      const totalPrice=subTotal+tax;

      
      document.getElementById("sub-total").innerText=subTotal;
      document.getElementById("tax-ammount").innerText=tax;
  
      document.getElementById("total-price").innerText=totalPrice;
  }
document.getElementById("phone-plus").addEventListener("click",function(){
  updateProductNumber('phone',1218,true);
  
})
document.getElementById("phone-minus").addEventListener("click",function(){
  updateProductNumber("phone",1218,false);
})



document.getElementById("case-plus").addEventListener("click",function(){
  
  updateProductNumber("case",59,true);
  

})
document.getElementById("case-minus").addEventListener("click",function(){
 
  updateProductNumber("case",59,false);
  
}
  
)


// document.getElementById("8gb-memory").addEventListener("click",function(){
//     const memoryCost=document.getElementById("memory-cost");
//       memoryCost.innerText=4;
// }
// )
// // const memoryValue2=document.getElementById("16gb-memory");
// // const storage1=document.getElementById("256gb-storage");
// // const storage2=document.getElementById("512gb-storage");
// // const storage3=document.getElementById("1TB-storage");
// const totalPrice=document.getElementById("total-price");
//   function updateTotal(){
//       const memoryCharge=parseInt(memoryCost.innerText);
//       const totalcost=parseInt(totalPrice.innerText);
//       const grandTotal=totalcost+memoryCharge;
//       totalPrice.innerText=grandTotal;
//   }
   
