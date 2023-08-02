const displayBox=document.querySelector(".display");
let list=document.querySelectorAll(".show-display");
document.querySelector(".calculate").addEventListener("click",calculate);
document.querySelector(".all-clear").addEventListener("click",clearAll);
document.querySelector(".clear-last").addEventListener("click",clear);

///////////////////////////////////
function showDisplay(event){
    const x=event.target.innerText;
    if(displayBox.innerHTML == 0){
       return displayBox.innerHTML=x;
    }
    else{
        
       return displayBox.innerHTML +=x;
    }
}
list.forEach(item => {
    item.addEventListener("click", showDisplay);
});

function calculate(){
    let result=displayBox.innerText;
    displayBox.innerText=eval(result);
}

function clearAll(){
    displayBox.innerText=0;
}

function clear(){
    let text=displayBox.innerText;
    if(text.length ===1){
        displayBox.innerText=0;
    }
    else{
        displayBox.innerText=text.substring(0,text.length-1);
    }
}