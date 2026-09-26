//jozza
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increaseBtn").addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", function () {

    if (count > 0) {
        count--;
        countDisplay.textContent = count; }
});

document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});

document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        this.textContent = "Light Mode";
    }
    else {
        this.textContent = "Dark Mode";
    }
});
