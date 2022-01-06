const elCircle = document.querySelector(".payment-button__circle")
const elButton = document.querySelector(".payment-button")
const elPrice1 = document.querySelector(".card-1__price")
const elPrice2 = document.querySelector(".card-2__price")
const elPrice3 = document.querySelector(".card-3__price")
elButton.addEventListener("click", function(){
    elCircle.classList.toggle("payment-button__circle-js")
    if (elCircle.classList.contains("payment-button__circle-js")) {
        elPrice1.textContent = "199.99"
        elPrice2.textContent = "249.99"
        elPrice3.textContent = "399.99"
    }
    else {
        elPrice1.textContent = "19.99"
        elPrice2.textContent = "24.99"
        elPrice3.textContent = "39.99"
    }
})
