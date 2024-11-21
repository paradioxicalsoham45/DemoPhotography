const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
});

ScrollReveal().reveal(".header h1", {
  origin: "left",
  duration: 1000,
  delay: 500,
  easing: "ease-in",
});

ScrollReveal().reveal("nav .nav-links li", {
  origin: "left",
  duration: 1000,
  interval: 400,
  easing: "ease-in",
});

ScrollReveal().reveal(".gallery h2", {
  origin: "left",
  duration: 1000,
  delay: 500,
  easing: "ease-in",
});

ScrollReveal().reveal(".about h2", {
  origin: "left",
  duration: 1000,
  delay: 500,
  easing: "ease-in",
});

ScrollReveal().reveal(".contact h2", {
  origin: "left",
  duration: 1000,
  delay: 500,
  easing: "ease-in",
});

ScrollReveal().reveal("form input, form textarea, form button", {
  origin: "left",
  duration: 1000,
  interval: 400,
  easing: "ease-in", 
});

ScrollReveal().reveal(".footer .social-media, .social-icon", {
  origin: "left",
  duration: 1000,
  interval: 400,
  easing: "ease-in", 
});

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    contactForm.dispatchEvent(new Event("submit"));
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !message) {
    showFeedback("Please fill in all fields!", "error");
    return;
  }

  if (!validateEmail(email)) {
    showFeedback("Please enter a valid email address!", "error");
    return;
  }

  const formDate = {
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toLocaleDateString(),
  };

  localStorage.setItem("contactFormData", JSON.stringify(formDate));

  showFeedback(
    "Thank you for your message! I will get back to you soon.",
    "success"
  );
  e.target.reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showFeedback(message, type) {
  let feedback = document.querySelector(".feedback");
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.classList.add("feedback");
    contactForm.parentNode.appendChild(feedback);
  }

  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
  feedback.style.display = "block";

  setTimeout(() => {
    feedback.style.display = "none";
  }, 3000);
}

const savedData = JSON.parse(localStorage.getItem("contactFormData"));

if (savedData) {
  console.log("Saved Form Data:", savedData);
  console.log(`Name: ${savedData.name}`);
  console.log(`Email: ${savedData.email}`);
  console.log(`Message: ${savedData.message}`);
  console.log(`Submitted on: ${savedData.timestamp}`);
}
