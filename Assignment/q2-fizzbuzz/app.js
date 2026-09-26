//jozza
const limit = document.getElementById("limit");
const list = document.getElementById("fizzBuzzList");
const button = document.getElementById("generateBtn");

button.addEventListener("click", function () {
    list.innerHTML = "";

    const number = Number(limit.value);

    for (let i = 1; i <= number; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            list.innerHTML += "<li>FizzBuzz</li>";
        }
        else if (i % 3 === 0) {
            list.innerHTML += "<li>Fizz</li>";
        }
        else if (i % 5 === 0) {
            list.innerHTML += "<li>Buzz</li>";
        }
        else {
            list.innerHTML += "<li>" + i + "</li>";
        }
    }
});
