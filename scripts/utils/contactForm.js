
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
  myInputs.style.width = "100%";
  myInputs.style.marginBottom = "10px";
  myInputs.style.fontSize = "25px";
  myInputs.style.borderRadius = "5px";
  myInputs.style.border = "none";
  myInputs.style.paddingLeft = "10px";
});

// Ouverture de la modale

function displayModal() {
  modal.style.display = "block";
  main.style.filter = "blur(5px)";
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");

    // add all the elements inside modal which you want to make focusable
  const  focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


  document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

  if (!isTabPressed) {
  return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
  if (document.activeElement === firstFocusableElement) {
    lastFocusableElement.focus(); // add focus for the last focusable element
    e.preventDefault();
  }
  } else { // if tab key is pressed
  if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
    firstFocusableElement.focus(); // add focus for the first focusable element
    e.preventDefault();
  }
  }
  });

  firstFocusableElement.focus();
}

// Fermeture de la modale 
function closeModal() {
  modal.style.display = "none";
  main.style.filter = "blur(0px)";
  modal.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
}

// focus sur le bouton de fermeture de la modale
// afin de fermer avec la touche Echap

/*
$(document).on('keydown', e => {
  const keyCode = e.keyCode ? e.keyCode : e.which

  if ($modal.attr('aria-hidden') == 'false' && keyCode === 27) {
      onCloseModal()
  }
})*/

// Insertion du nom du photographe dans la modale
function contactFactory(data) {
  const { name } = data;

  function getContactCardDOM() {
      const modal = document.querySelector(".modal");

      const photographerName = document.createElement('p');
          photographerName.textContent = name;
          photographerName.style.order = "2";
          photographerName.style.fontSize = "50px";
          photographerName.style.textAlign = "left";
          photographerName.style.marginBottom = "20px";

      
      modal.appendChild(photographerName);
  }

  return { name, getContactCardDOM }
}


// Fonction pour Validation du formulaire 

form.addEventListener("submit", (e) => {
  let isInputFirstnameValid = false;
  let isInputLastnameValid = false;
  let isInputEmailValid = false;
  let isTextareaValid = false;


  // Validation du champs Prénom

  if(inputFirstname.value == "") {
    inputFirstname.style.border = "solid 5px #901C1C";
    errorFirstname.textContent = "Veuillez entrer votre prénom";
    errorFirstname.style.color = "#901C1C";
    inputFirstname.setAttribute("aria-invalid", "false");
    isInputFirstnameValid = false;
    e.preventDefault();
}
else {
  inputFirstname.setAttribute("aria-invalid", "true");
  inputFirstname.style.border = "";
  errorFirstname.textContent = "";
  errorFirstname.style.color = "";
  isInputFirstnameValid = true;
  
}


// Validation du champs Nom 

if(inputLastname.value == "") {
  inputLastname.style.border = "solid 5px #901C1C";
  errorLastname.textContent = "Veuillez entrer votre nom";
  errorLastname.style.color = "#901C1C";
  inputLastname.setAttribute("aria-invalid", "false");
  isInputLastnameValid = false;
  e.preventDefault();
}
else {
  inputLastname.setAttribute("aria-invalid", "true");
  inputLastname.style.border = "";
  errorLastname.textContent = "";
  errorLastname.style.color = "";

  isInputLastnameValid = true;
}


// Validation du champs E-mail 

if(inputEmail.value == "") {
  inputEmail.style.border = "solid 5px #901C1C";
  errorEmail.textContent = "Veuillez entrer un e-mail valide";
  errorEmail.style.color = "#901C1C";
  inputEmail.setAttribute("aria-invalid", "false");
  isInputEmailValid = false ;
  e.preventDefault();
}
else {
  inputEmail.setAttribute("aria-invalid", "true");
  inputEmail.style.border = "";
  errorEmail.textContent = "";
  errorEmail.style.color = "";
  isInputEmailValid = true;
}


// Validation du champs Message

if(textarea.value == "") {
  textarea.style.border = "solid 5px #901C1C";
  errorTextarea.textContent = "Veuillez entrer votre message";
  errorTextarea.style.color = "#901C1C";
  textarea.setAttribute("aria-invalid", "false");
  isTextareaValid = false ;
  e.preventDefault();
}
else {
  textarea.setAttribute("aria-invalid", "true");
  textarea.style.border = "";
  errorTextarea.textContent = "";
  errorTextarea.style.color = "";
  isTextareaValid = true;
}

if(isInputFirstnameValid &&
  isInputLastnameValid &&
  isInputEmailValid &&
  isTextareaValid) {
      form.reset();
  }
});


// Envoie des données du formulaire dans la console 

submitBtn.addEventListener("click", () => {
console.log(inputLastname.value);
console.log(inputFirstname.value);
console.log(inputLastname.value);
console.log(inputEmail.value);
console.log(textarea.value);
})
