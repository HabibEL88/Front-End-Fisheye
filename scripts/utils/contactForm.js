
// AFFICHE LA MODALE DE CONTACT DU PHOTOGRAPHE

const contactHeader = document.querySelector(".contact-header");

const contactTitle = document.querySelector(".contact-title");
const label = document.querySelectorAll("label");
const myInputs = document.querySelectorAll(".input-form");
const closeImg = document.querySelector(".close-modale");
const submitBtn = document.querySelector(".submit-btn");
const modal = document.getElementById("contact_modal");
const main = document.querySelector("main");

const form = document.querySelector('form');
const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputEmail = document.getElementById('email');
const textarea = document.getElementById('textarea');

const errorFirstname = document.querySelector(".error-firstname");
const errorLastname = document.querySelector(".error-lastname");
const errorEmail = document.querySelector(".error-email");
const errorTextarea = document.querySelector(".error-textarea");

contactTitle.style.fontSize = "50px";

closeImg.style.width = "50px";
closeImg.style.cursor = "pointer";

textarea.style.width = "100%";
textarea.style.height = "150px";

submitBtn.style.marginTop = "20px";

label.forEach((label) => {
  label.style.fontSize = "30px";
  label.style.color = "#312E2E";
});

myInputs.forEach((myInputs) => {
  myInputs.style.height = "60px";
  myInputs.style.height = "60px";  
  myInputs.style.marginBottom = "10px";
  myInputs.style.fontSize = "25px";
  myInputs.style.borderRadius = "5px";
  myInputs.style.border = "none";
  myInputs.style.paddingLeft = "10px";
});

// Ouverture de la modale









function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

let btnContact = document
  .getElementById("contact")
  .addEventListener("click", displayModal);

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let btnCloseModal = document.getElementById("close_modal");

btnCloseModal.focus();
btnCloseModal.addEventListener("click", closeModal);
