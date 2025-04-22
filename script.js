let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let message = document.getElementById("Message");
let general = document.getElementById("General-Enquiry");
let support = document.getElementById("Support-Request");
let consent = document.getElementById("consent");
let successContainer = document.getElementById("success-container");

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    successContainer.innerHTML = "Thanks for completing the form. We'll be in touch soon!";
    successContainer.style.display = "block";
});
