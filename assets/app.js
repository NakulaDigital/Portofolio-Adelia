// Modal dinamis (JavaScript DOM)
const modalTitle = document.getElementById("staticBackdropLabel");
const modalBody = document.querySelector(".modal-body");

if (modalTitle && modalBody) {
  document.querySelectorAll(".btn-school").forEach(btn => {
    btn.addEventListener("click", function () {
      modalTitle.innerText = this.dataset.title;
      modalBody.innerText = this.dataset.content;
    });
  });
}
