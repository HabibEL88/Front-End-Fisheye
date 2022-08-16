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
