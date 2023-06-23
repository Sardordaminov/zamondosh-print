let navbar = document.querySelector('.nav'),
    opener = document.querySelector(".fa-bars"),
    toTop = document.querySelector(".to-top"),
    showProducts = false,
    showProducts_btn = document.querySelector('.show-products'),
    products = document.querySelector('.products')


window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navbar.classList.add('active')
        toTop.classList.add('visible')
    } else {
        navbar.classList.remove('active')
        toTop.classList.remove('visible')
    }
})

opener.addEventListener("click", () => {
    if (navbar.classList.contains("full")) {
        navbar.classList.remove('full')
    } else {
        navbar.classList.add("full")
    }
})

toTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

showProducts_btn.addEventListener("click", () => {
    if (products.classList.contains("full")) {
        products.classList.remove('full')
        showProducts_btn.classList.remove('rotate')
    } else {
        products.classList.add("full")
        showProducts_btn.classList.add('rotate')
    }
})