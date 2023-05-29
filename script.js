let navbar = document.querySelector('.nav')
let open = document.querySelector(".fa-bars")
let close = document.querySelector(".fa-xmark")

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

open.addEventListener("click", () => {
    if (1 > 0) {
        navbar.classList.add('full')
        open.classList.add("none")
        close.classList.add('block')
    }
})
close.addEventListener("click", () => {
    if (1 > 0) {
        navbar.classList.remove('full')
        open.classList.remove("none")
        close.classList.remove("block")
        open.classList.add("block")
        close.classList.add('none')
    }
})