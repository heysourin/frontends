"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//Note: querySelectorAll selects all the elements, on the otherhand querySelector selects the first element only
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Functions we want to be happened when we click a button

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};



//console.log(btnsOpenModal); //output getting as an array
//getting the output of the above thing in new lines
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal());
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
