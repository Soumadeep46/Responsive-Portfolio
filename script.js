/*========== menu icon navbar ==========*/
const menuIcon = document.querySelector("#menu-icon")
const navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

/*========== scroll sections active link ==========*/
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach((sec) => {
        const top = window.scrollY
        const offset = sec.offsetTop - 150
        const height = sec.offsetHeight
        const id = sec.getAttribute("id")

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active")
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
    })

    /*========== sticky navbar ==========*/
    const header = document.querySelector(".header")

    header.classList.toggle("sticky", window.scrollY > 100)

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active")
}

/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

/*========== dark light mode ==========*/
const darkModeIcon = document.querySelector("#darkMode-icon")

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-mode")
}

/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal(".home-content, .heading", { origin: "top" })
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" })
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", { origin: "right" })

// Random quote generator
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Your most unhappy customers are your greatest source of learning. — Bill Gates",
    "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough. — Mark Zuckerberg",
    "Any sufficiently advanced technology is indistinguishable from magic. — Arthur C. Clarke",
    "The people who are crazy enough to think they can change the world are the ones who do. — Steve Jobs",
    "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "Mischief managed... or at least debugged!",
    "If I had asked people what they wanted, they would have said faster horses. — Henry Ford",
    "Aerodynamics are for people who can't build engines. — Enzo Ferrari",
    "The car is the closest thing we will ever create to something that is alive. — Sir William Lyons (Founder of Jaguar)",
    "Racing is life. Anything before or after is just waiting. — Steve McQueen",
    "The best car safety device is a rear-view mirror with a cop in it. — Dudley Moore",
    "When I see an Alfa Romeo, I lift my hat. — Ferdinand Porsche",
    "The horsepower wars will never end as long as there are cars and men. — Carroll Shelby",
    "Electric cars are not the future—they are the present. — Elon Musk",
    "Speed has never killed anyone. Suddenly becoming stationary, that's what gets you. — Jeremy Clarkson",
    "A dream without ambition is like a car without gas… you're not going anywhere. — Sean Hampton",
    "It does not do to dwell on dreams and forget to live. — Albus Dumbledore",
    "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. — Albus Dumbledore",
    "Yer a wizard, Harry. — Rubeus Hagrid",
    "I solemnly swear that I am up to no good. — Fred & George Weasley (Marauder's Map)",
    "Mischief managed. — Harry Potter",
    "Always. — Severus Snape",
    "Fear of a name increases fear of the thing itself. — Hermione Granger",
    "We've all got both light and dark inside us. What matters is the part we choose to act on. — Sirius Black",
    "Not my daughter, you b**h! — Molly Weasley (to Bellatrix Lestrange)",
    "I am what I am, an' I'm not ashamed. — Rubeus Hagrid",
]

const quoteText = document.getElementById("quote-text")
const newQuoteBtn = document.getElementById("new-quote")

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function displayNewQuote() {
    quoteText.textContent = getRandomQuote()
}

newQuoteBtn.addEventListener("click", displayNewQuote)

// Initial quote
displayNewQuote()

// Add quote section to ScrollReveal
ScrollReveal().reveal(".quote-container", { origin: "bottom" })