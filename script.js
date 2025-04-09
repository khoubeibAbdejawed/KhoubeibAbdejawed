document.getElementById("home").addEventListener("click", function() {
    window.scrollTo(0, 0); 
    console.log('%c home page ' , 'color:red');
});

document.getElementById("projects").addEventListener("click", function() {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact").addEventListener("click", function() {
    const contactContainer = document.querySelector(".contact-container");
    contactContainer.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("h").addEventListener("click", function() {
    window.scrollTo(0, 0);  
});

document.getElementById("p").addEventListener("click", function() {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("c").addEventListener("click", function() {
    const contactContainer = document.querySelector(".contact-container");
    contactContainer.scrollIntoView({ behavior: "smooth" });
});

// Animation au défilement
document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".body-container, .technologies-container, .projects-container, .contact-container, .project, .technology, .contact-link");

    function checkScroll() {
        elementsToAnimate.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Effet de machine à écrire en boucle
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".title");
    const text = textElement.innerHTML;
    textElement.innerHTML = "";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                textElement.innerHTML = "";
                index = 0;
                typeWriter();
            }, 2000);
        }
    }
    typeWriter();
});

// Menu mobile toggle
document.getElementById("menuToggle").addEventListener("click", function () {
    let menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
