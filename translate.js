let langs = document.querySelector(".translator"),
    link = document.querySelectorAll(".link"),
    li1 = document.querySelector(".child1")
    li2 = document.querySelector(".child2")
    li3 = document.querySelector(".child3")
    li4 = document.querySelector(".child4")
    li5 = document.querySelector(".child5")
    li6 = document.querySelector(".child6")
    title = document.querySelector(".header-main h1"),
    descr = document.querySelector(".header-main p"),
    header_btn1 = document.querySelector(".btn.gray"),
    header_btn2 = document.querySelector(".btn.second")
    about_us_title = document.querySelector(".text h2"),
    about_us_descr = document.querySelector(".text p"),
    about_us_btn = document.querySelector(".hire"),
    our_services_title = document.querySelector(".our-services-title"),
    services_cart_title1 = document.querySelector('.services_cart_title1'),
    services_cart_title2 = document.querySelector('.services_cart_title2'),    
    services_cart_title3 = document.querySelector('.services_cart_title3'),    
    services_cart_title4 = document.querySelector('.services_cart_title4'),    
    services_cart_title5 = document.querySelector('.services_cart_title5'),    
    services_cart_title6 = document.querySelector('.services_cart_title6'),
    services_cart_descr1 = document.querySelector(".services_cart_descr1"),   
    services_cart_descr2 = document.querySelector(".services_cart_descr2"),   
    services_cart_descr3 = document.querySelector(".services_cart_descr3"),   
    services_cart_descr4 = document.querySelector(".services_cart_descr4"),   
    services_cart_descr5 = document.querySelector(".services_cart_descr5"),   
    services_cart_descr6 = document.querySelector(".services_cart_descr6"),
    products_title = document.querySelector(".products-title"),
    show_products = document.querySelector(".show-products p"),

link.forEach(el => {
    el.addEventListener("click", () => {

        let attr = el.getAttribute("language")

        li1.textContent = data[attr].li1
        li2.textContent = data[attr].li2
        li3.textContent = data[attr].li3
        li4.textContent = data[attr].li4
        li5.textContent = data[attr].li5
        li6.textContent = data[attr].li6
        title.textContent = data[attr].title
        descr.textContent = data[attr].description
        header_btn1.textContent = data[attr].header_btn1
        header_btn2.textContent = data[attr].header_btn2
        about_us_title.textContent = data[attr].about_us_title
        about_us_descr.textContent = data[attr].about_us_descr
        about_us_btn.textContent = data[attr].about_us_btn
        our_services_title.textContent = data[attr].our_services_title
        services_cart_title1.textContent = data[attr].services_cart_title1
        services_cart_title2.textContent = data[attr].services_cart_title2
        services_cart_title3.textContent = data[attr].services_cart_title3
        services_cart_title4.textContent = data[attr].services_cart_title4
        services_cart_title5.textContent = data[attr].services_cart_title5
        services_cart_title6.textContent = data[attr].services_cart_title6
        services_cart_descr1.textContent = data[attr].services_cart_descr1
        services_cart_descr2.textContent = data[attr].services_cart_descr2
        services_cart_descr3.textContent = data[attr].services_cart_descr3
        services_cart_descr4.textContent = data[attr].services_cart_descr4
        services_cart_descr5.textContent = data[attr].services_cart_descr5
        services_cart_descr6.textContent = data[attr].services_cart_descr6
        products_title.textContent = data[attr].products_title
        show_products.textContent = data[attr].show_products
    })
})

let data = {
    english: {
        li1: "Home",
        li2: "About",
        li3: "Service",
        li4: "Partners",
        li5: "FAQ",
        li6: "Contacts",
        title: "Copy & Printing",
        description: "We specialize in commercial offset printing and digital printing services to cover all your needs.",
        header_btn1: "Make an order",
        header_btn2: "Read more",
        about_us_title: "About Us",
        about_us_descr: "Our company has been providing customers with cardboard and textile labels to Uzbekistan and Central Asian countries for 15 years. At present, it provides services to more than 1,000 textile enterprises",
        about_us_btn: "Learn more",
        our_services_title: "OUR SERVICES",
        services_cart_title1: "Branding Service",
        services_cart_title2: "Label for textile",
        services_cart_title3: "Packaging Box",
        services_cart_title4: "Woven Label",
        services_cart_title5: "Plastic seal string",
        services_cart_title6: "Color & b/w Prints",
        services_cart_descr1: "Your brand is the most important investment you can make for your business",
        services_cart_descr2: "Cardboard label for suit and textile products",
        services_cart_descr3: "Cardboard label for suit and textile products",
        services_cart_descr4: "Woven labels for clothes",
        services_cart_descr5: "Custom logo garment plastic hang tag wire seal",
        services_cart_descr6: "All the colorful prints you want with modern design",
        products_title: "PRODUCTS",
        show_products: `Show Products`,
    },
    russian: {
        li1: "Главная",
        li2: "О нас",
        li3: "Сервис",
        li4: "Партнеры",
        li5: "FAQ",
        li6: "Контакты",
        title: "Копирование & печать",
        description: 'Мы специализируемся на коммерческой офсетной печати и услугах цифровой печати, чтобы удовлетворить все ваши потребности.',
        header_btn1: "Сделать заказ",
        header_btn2: "Читать дальше",
        about_us_title: "О нас",
        about_us_descr: "Наша компания уже 15 лет поставляет покупателям картонные и текстильные этикетки в Узбекистан и страны Средней Азии. В настоящее время обслуживает более 1000 текстильных предприятий.",
        about_us_btn: "Узнать больше",
        our_services_title: "НАШИ СЕРВИСЫ",
        services_cart_title1: "Служба брендинга",
        services_cart_title2: "Этикетка для текстиля",
        services_cart_title3: "Упаковочная коробка",
        services_cart_title4: "Tканая этикетка",
        services_cart_title5: "Пластиковая пломба",
        services_cart_title6: "Цветная & ч/б печать",
        services_cart_descr1: "Ваш бренд — это самая важная инвестиция, которую вы можете сделать для своего бизнеса.",
        services_cart_descr2: "Картонная этикетка для костюма и текстильных изделий",
        services_cart_descr3: "Картонная этикетка для костюма и текстильных изделий",
        services_cart_descr4: "Тканые этикетки для одежды",
        services_cart_descr5: "Пластиковая бирка для одежды с логотипом на заказ",
        services_cart_descr6: "Любые красочные принты с современным дизайном",
        products_title: "ПРОДУКТЫ",
        show_products: "Показать продукты",
    }
}