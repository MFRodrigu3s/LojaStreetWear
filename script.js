let count = 1

setInterval (function (){
    count++
    if(count > 3){
        count = 1
    } 
    document.getElementById("input" + count).checked = true
}, 4000);

