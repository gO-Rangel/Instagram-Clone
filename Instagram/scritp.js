const language = document.querySelector(".language");
const flip = document.querySelector(".flip");
language.addEventListener("click", (e) => {
  language.classList.toggle("active");
  flip.classList.toggle("fliped");
});
