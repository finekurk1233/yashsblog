var btn = document.getElementById('btn');

btn.addEventListener('click', runTime);


var ele = document.getElementById('jon_wick'); 

var x = document.getElementById('x');   
x.addEventListener('click', closeTime);


function runTime(e){
    ele.style.display="flex";  
    ele.style.position="fixed";
    

}
function closeTime(e){
    ele.style.display="none";     

}