//jozza
let count = 0;

const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const themeButton = document.getElementById("themeBtn");

increaseButton.addEventListener("click", function () {
    count++;
    countElement.textContent = count;
});

decreaseButton.addEventListener("click", function () {

    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
});

resetButton.addEventListener("click", function () {
    count = 0;
    countElement.textContent = count;
});

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Mode";
    }
    else {
        themeButton.textContent = "Dark Mode";
    }
});
