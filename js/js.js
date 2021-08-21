document.getElementById("8gb-memory").addEventListener("click",function(){
    const memoryCost=document.getElementById("memory-cost");
      memoryCost.innerText=4;
}
)
// const memoryValue2=document.getElementById("16gb-memory");
// const storage1=document.getElementById("256gb-storage");
// const storage2=document.getElementById("512gb-storage");
// const storage3=document.getElementById("1TB-storage");
const totalPrice=document.getElementById("total-price");
  function updateTotal(){
      const memoryCharge=parseInt(memoryCost.innerText);
      const totalcost=parseInt(totalPrice.innerText);
      const grandTotal=totalcost+memoryCharge;
      totalPrice.innerText=grandTotal;
  }
   
