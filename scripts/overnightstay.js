"use strict"

window.onload = function () {

    let theForm = document.querySelector("#theForm");

    let cup = document.querySelector("#cup");
    let cone = document.querySelector("#cone");

    cup.addEventListener("click", hideShowToppings)
    cone.addEventListener("click", hideShowToppings)

    theForm.addEventListener("submit", calcTotal);

}
