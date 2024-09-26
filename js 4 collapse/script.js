const btns = document.querySelectorAll(".click");
const innerText = document.querySelectorAll(".innerText");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const siblingText = btn.nextElementSibling;
    if (!siblingText.classList.contains("show")) {
      innerText.forEach((text) => {
        text.classList.remove("show");
      });
    }
    siblingText.classList.toggle("show");
  });
});
