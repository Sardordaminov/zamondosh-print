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
let link_inst = document.getElementById("UZ-NG");

link_inst.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/"
})
document.addEventListener("DOMContentLoaded", function () {
    var glide = new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        perView: 4,
        autoplay: 2000,
        breakpoints: {
            768: {
                perView: 3,
            },
            520: {
                perView: 2,
            },
        },
    });

    glide.mount();
});
