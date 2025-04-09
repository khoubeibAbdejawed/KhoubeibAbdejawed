// script.js
document.getElementById("home").addEventListener("click", function() {
    window.scrollTo(0, 0);  
});
document.getElementById("projects").addEventListener("click", function() {
    
    const contactContainer = document.querySelector(".projects-container");

    
    contactContainer.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact").addEventListener("click", function() {
    
    const contactContainer = document.querySelector(".contact-container");

    
    contactContainer.scrollIntoView({ behavior: "smooth" });
});

