let buttonNumber = document.getElementsByClassName("buttonNumber");
let para = document.getElementById("barreCalcul");
let buttonOperande = document.getElementsByClassName("operande");
let buttonPoint = document.getElementById("buttonPoint");
let buttonEqual = document.getElementById("buttonEqual");
let buttonReset = document.getElementById("buttonReset");

for (let button of buttonNumber){
    button.addEventListener("click", function () {
        let dataNumber = button.innerHTML;
        para.innerHTML += dataNumber;
    })
}

for (let button of buttonOperande) {
    button.addEventListener("click", function () {
        let dataOperande = button.innerHTML;
        para.innerHTML += dataOperande;
    })
}

buttonEqual.addEventListener("click", function () {
    let result = eval(para.innerHTML);
    para.innerHTML = result;

})

buttonPoint.addEventListener("click", function () {
    let dataPoint = buttonPoint.innerHTML;
    para.innerHTML += dataPoint;
})

buttonReset.addEventListener("click", function () {
    para.innerHTML = null;
})