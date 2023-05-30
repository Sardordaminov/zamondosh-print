let navbar = document.querySelector('.nav')
let opener = document.querySelector(".fa-bars")

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

opener.addEventListener("click", () => {
    if (navbar.classList.contains("full")) {
        navbar.classList.remove('full')
    } else {
        navbar.classList.add("full")
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});