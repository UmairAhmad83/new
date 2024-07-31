let currentdisplay="";
let dis=document.querySelector("#display");
let btn=document.querySelectorAll("#bt");
let eq=document.querySelector("#equal");
let can=document.querySelector("#cancel");
let del=document.querySelector("#delete");
btn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    currentdisplay= currentdisplay+btn.innerText;
    calculate(currentdisplay);
    
    });
});
function calculate(currentdisplay){
    dis.value=currentdisplay;
}
eq.addEventListener("click",()=>{
    let result=eval(currentdisplay);
    calculate(result);
});
can.addEventListener("click",()=>{
    currentdisplay='';
   calculate(currentdisplay);
});
del.addEventListener("click",()=>{
currentdisplay=currentdisplay.toString().slice(0,-1);
calculate(currentdisplay);
})