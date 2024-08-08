const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const count = document.getElementById("count");
let num = 0;
count.innerText = num;
function increment(){  
  num += 1
  count.innerText = num;
  // console.log("hi")
}
console.log(count.innerText);
function decrement(){  

 if(num > 0 ){
    num -= 1
 } else{ alert("the number is 0")}
  count.innerText = num;
  // console.log("hi")
}