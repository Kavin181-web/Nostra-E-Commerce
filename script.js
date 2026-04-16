// --- IMAGE SLIDER LOGIC ---
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

function nextSlide() { showSlide(slideIndex + 1); }
function prevSlide() { showSlide(slideIndex - 1); }

// Auto Change Slides every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// --- SEARCH LOGIC (Collections Page) ---
function searchProduct() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let productCards = document.querySelectorAll(".card");

    productCards.forEach(card => {
        let productName = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = productName.includes(searchTerm) ? "block" : "none";
    });
}

// --- FILTER LOGIC (Collections Page) ---
function filterProduct() {
    let selectedCategory = document.getElementById("filter").value;
    let productCards = document.querySelectorAll(".card");

    productCards.forEach(card => {
        let cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// --- FORM VALIDATION (Contact Page) ---
function validateForm() {
    let name = document.getElementById("name").value;
    alert("Success! Thank you for reaching out, " + name + ". We will contact you soon.");
    return true;
}