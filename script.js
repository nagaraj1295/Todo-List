
let outtxt = document.getElementById("tasksl");
function add(){
    let intxt = document.getElementById("intext").value;
    outtxt.innerHTML +="<li>"+intxt+"<button onclick=dlt(this) id='dlt'>❌</button>"+"</li>";  
}

function dlt(btn){
    btn.parentElement.remove();
}