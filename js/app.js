function verifyMemoryCost(isAdd){
    const memoryCost=document.getElementById("memory-cost");
    const memoryCostText=memoryCost.innerText;
    const memory=parseFloat(memoryCostText);
    if(isAdd==true){
        memoryCost.innerText=0;
    }
    else{
    memoryCost.innerText=180;
    }
   
}



document.getElementById("8gb-memory").addEventListener("click",function(){
    // const memoryCost =document.getElementById("memory-cost");
    // const memoryCostText=memoryCost.innerText;
    // const memory=parseFloat(memoryCostText);
    // memoryCost.innerText=0;
   verifyMemoryCost(true);
 


    


}
)
document.getElementById("16gb-memory").addEventListener("click",function(){
//     const memoryCost=document.getElementById("memory-cost");
//     const memoryCostText=memoryCost.innerText;
//     const memory=parseFloat(memoryCostText);
//    memoryCost.innerText=180;
verifyMemoryCost(false);
   
})