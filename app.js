const btnModale = document.querySelector(".btn-modale")
const btnClose = document.querySelector(".btn-close")
const modale = document.querySelector(".modale")

btnModale.addEventListener("click", function () {
  modale.style.display = "block"
})
btnClose.addEventListener("click", function () {
  modale.style.display = "none"
})
window.addEventListener("click", function (e) {
  if (e.target == modale) {
    modale.style.display = "none"
  }
})
