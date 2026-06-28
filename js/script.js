/* =========================
   Typing Animation
========================= */

const words = [
    "AI Quality Analyst",
    "Aspiring Software Engineer",
    "Technology Enthusiast",
    "Future Healthcare Professional"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

/* =========================
   Scroll Reveal
========================= */

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.classList.add("reveal");
});

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* =========================
   Back To Top
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =========================
   Gallery Lightbox
========================= */

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (event) => {

    if(event.target === lightbox){

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        lightbox.style.display = "none";

    }

});/* =========================
   Mobile Navigation
========================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});/* =========================
   Theme Toggle
========================= */

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeToggle.textContent = "☀️";

    }else{

        localStorage.setItem("theme","dark");

        themeToggle.textContent = "🌙";

    }

});/* =========================
   Animated Counters
========================= */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters(){

    if(countersStarted) return;

    const statsSection = document.querySelector(".stats");

    const top = statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight * 0.8){

        countersStarted = true;

        counters.forEach(counter=>{

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target/120));

            const timer = setInterval(()=>{

                current += increment;

                if(current >= target){

                    counter.textContent = target;

                    clearInterval(timer);

                }else{

                    counter.textContent = current;

                }

            },15);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();