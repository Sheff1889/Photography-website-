const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        //Hamburger animation 

        hamburger.classList.toggle('toggle'); 
        

    });
}

navSlide();



/* const hamburger = document.querySelectorAll(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const  iconMenu = document.querySelector(".iconMenu")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
}) */