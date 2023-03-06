const btn = document.querySelector(".btn");
const input = document.querySelectorAll(".box_input");
const num = /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}/;
btn.addEventListener("click", function(e) {
    e.preventDefault
    console.log("khbjhjb");
    if (num.test(input[0].value) && input[1].value === input[2].value) {
        input[0].classList.add('active')
        input[1].classList.add('active')
        input[2].classList.add('active')
        alert("Siz registratsiyadan muvofaqayatli otingiz")
    } else {
        input[1].classList.add('active2')
        input[2].classList.add('active2')
        input[0].classList.add('active')
        alert("Iltimos registratsiyani toliq amalga oshirig")
    }
});