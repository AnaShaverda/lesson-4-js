const box = document.getElementById("box");
const text = document.getElementById("text");
const clickBtn = document.getElementById("clickBtn");
const navigation = document.querySelector(".nav");

const changeTheme = () => {
  box.addEventListener("click", (event) => {
    event.target.classList.toggle("dark");
    if (event.target.classList.contains("dark")) {
      text.textContent = "box dark";
      text.classList.add("dark");
    } else {
      text.textContent = "box light";
      text.classList.remove("dark");
    }
  });
};

changeTheme();

clickBtn.addEventListener("click", () => {
  navigation.classList.toggle("show");
});
