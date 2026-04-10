const apple = document.querySelector("#apple");
const newLi = document.createElement("li");
newLi.textContent = "장기";
newLi.classList.add("none-li");
apple.before(newLi);
