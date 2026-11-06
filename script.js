// ===== 1. MOBILE MENU =====
// the menu button adds/removes the class "open" on the navbar (see style.css)
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("open");                       // add "open" if missing, remove it if present
  menuBtn.setAttribute("aria-expanded", navbar.classList.contains("open"));
});

// close the menu after a link is clicked, so it doesn't stay open on phones
const navLinks = document.querySelectorAll(".nav-links a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("open");
  });
}

// ===== 2. FAQ: click a question to show or hide its answer =====
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    question.parentElement.classList.toggle("open");     // parentElement = the .faq-item box
  });
});

// ===== 3. CONTACT FORM: check the fields, then open the email app =====
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const myEmail = "theacebackup@gmail.com";                 // the form opens an email to this address

if (form) form.addEventListener("submit", function (event) {
  event.preventDefault();                                // stops the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // empty fields
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.className = "error";
    return;
  }

  // very simple email check
  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.className = "error";
    return;
  }

  // everything is fine: build a mailto link with the message inside it
  const link = "mailto:" + myEmail +
    "?subject=" + encodeURIComponent("Message from " + name) +
    "&body=" + encodeURIComponent(message + "\n\nReply to: " + email);

  formMessage.textContent = "Thanks, " + name + "! Your email app will open so you can send the message.";
  formMessage.className = "success";
  window.location.href = link;
  form.reset();
});

// ===== 4. FOOTER YEAR: always shows the current year =====
document.getElementById("year").textContent = new Date().getFullYear();
