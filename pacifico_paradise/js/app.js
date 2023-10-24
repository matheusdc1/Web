const expand = (img) => {
  const galeryImg = document.querySelector(img);
  const modalImg = document.querySelector(".modal-img");

  const galeryModal = document.querySelector(".galeria-modal");

  galeryModal.style.display = "block";

  modalImg.setAttribute("src", galeryImg.getAttribute("src"));
  console.log(galeryImg.getAttribute("src"));
};

const closeModal = (modalElement) => {
  const modal = document.querySelector(modalElement);

  modal.style.display = "none";
};
