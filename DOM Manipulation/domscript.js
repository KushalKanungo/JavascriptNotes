
let boxNum = 4;
let button = document.getElementById("createnew");
let remove = document.getElementById("remove");
let removeSpec = document.getElementById("removeSpec");
let hidden = document.getElementById("hidden");



function createDiv() {
    let cont = document.getElementById("cont");
    let box = document.createElement("div");
    box.classList.add("box1");
    box.innerText = "This is Box" + boxNum;      // Inner text and inner Html
    cont.appendChild(box);
    boxNum++;
}


function removeDiv() {
    let cont = document.getElementById("cont");
    cont.removeChild(cont.lastElementChild);
    boxNum--;
}


function removeSpecific() {
    let boxNum = document.getElementById("boxNum").value;
    let allbox = document.querySelectorAll(".box1");
    let cont = document.getElementById("cont");
    cont.removeChild(allbox[boxNum - 1]);
}

function hidediv(){
    let boxNum = document.getElementById("boxNum").value;
    let allbox = document.querySelectorAll(".box1");
    allbox[boxNum-1].classList.add("hide");
}


//Event listner
button.addEventListener("click", createDiv);   
remove.addEventListener("click", removeDiv);
removeSpec.addEventListener("click", removeSpecific);
hidden.addEventListener("click", hidediv);
