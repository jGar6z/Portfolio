//Menu Mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Scroll to Top Button
//Get the Button
let scrollTop = document.getElementById("scrollTopBtn");

//Show with the Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ) {
        scrollTop.style.display = "flex";
        scrollTop.style.animationName = "fadeIn";
    } else {
        scrollTop.style.display = "none";
    }
}

//Scroll to Top Action
function toTopFunction() {
    document.body.scrollTop = 0; //Safari Navigator
    document.documentElement.scrollTop = 0; //Other Navigators
}

//Email verification with regex
function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

validateEmail("teste") //false
validateEmail("teste.gmail") //false
validateEmail("teste@gmail") //false
validateEmail("teste@gmail.c") //false
validateEmail("teste@gmail.com") //true


//Change title when user change tab
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Volte aqui :(";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})