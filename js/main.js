 let X = document.getElementById("total1")
 let Y = document.getElementById("total2")
 let total = document.querySelector(".total")
 console.log(total)

document.addEventListener("mousemove", function(event){

   X.innerHTML = event.clientX
   Y.innerHTML = event.clientY

  
});

   total.addEventListener("mousemove", function(){
      total.style.backgroundColor = "yellow";
   });

