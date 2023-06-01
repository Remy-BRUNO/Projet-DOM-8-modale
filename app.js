const btnModale = document.querySelector(".btn-modale")
const btnClose = document.querySelector(".btn-close")
const modale = document.querySelector(".modale")
const modaleContent = document.querySelector(".modale-content")
// const btns = document.querySelectorAll(".btn")

btnModale.addEventListener("click", function () {
  modale.style.display = "block"
  modaleContent.style.top = "50%"
})
btnClose.addEventListener("click", function () {
  modale.style.display = "none"
})
window.addEventListener("click", function (e) {
  if (e.target == modale) {
    modale.style.display = "none"
  }
})

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     if (modale.style.display == "none") {
//       modale.style.display = "block"
//     } else {
//       modale.style.display = "none"
//     }
//   })
// })
