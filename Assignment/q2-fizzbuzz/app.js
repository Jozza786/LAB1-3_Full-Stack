//jozza
const limitInput = document.getElementById("limit");
const generateButton = document.getElementById("generateBtn");
const fizzBuzzList = document.getElementById("fizzBuzzList");

generateButton.addEventListener("click", function () {

    const limit = Number(limitInput.value);

    fizzBuzzList.innerHTML = "";

    if (limit <= 0 || isNaN(limit)) {
        fizzBuzzList.innerHTML = "<li>Please enter a valid number.</li>";
        return;
    }

    for (let i = 1; i <= limit; i++) {

        const listItem = document.createElement("li");

        if (i % 3 === 0 && i % 5 === 0) {
            listItem.textContent = "FizzBuzz";
        }
        else if (i % 3 === 0) {
            listItem.textContent = "Fizz";
        }
        else if (i % 5 === 0) {
            listItem.textContent = "Buzz";
        }
        else {
            listItem.textContent = i;
        }

        fizzBuzzList.appendChild(listItem);
    }
});
