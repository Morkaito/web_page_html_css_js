var navToggle = document.querySelector(".nav-toggle");
var navClosed = document.querySelector(".nav-closed");
var nav = document.querySelector(".nav");
var headerClass = document.querySelector(".header");

navToggle.addEventListener("click", (event) => {
    event.preventDefault();
    nav.classList.add("active");
});

navClosed.addEventListener("click", (event) => {
    event.preventDefault();
    nav.classList.remove("active");
});

window.addEventListener('scroll', (event) => {
    if(window.pageYOffset < 234){
        headerClass.classList.remove("fixed");
    } else {
        headerClass.classList.add("fixed")
    };
});
