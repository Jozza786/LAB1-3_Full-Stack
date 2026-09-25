//jozza 
// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Convert Fahrenheit to Celsius
const fahrenheitToCelsius = (f) => {
    return (f - 32) * 5 / 9;
};

const temperatureInput = document.getElementById("temperature");
const toFahrenheitButton = document.getElementById("toFahrenheit");
const toCelsiusButton = document.getElementById("toCelsius");
const result = document.getElementById("result");

toFahrenheitButton.addEventListener("click", function () {
    const value = Number(temperatureInput.value);

    if (temperatureInput.value === "" || isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const answer = celsiusToFahrenheit(value);

    result.textContent = value + " °C = " + answer.toFixed(1) + " °F";
});

toCelsiusButton.addEventListener("click", function () {
    const value = Number(temperatureInput.value);

    if (temperatureInput.value === "" || isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const answer = fahrenheitToCelsius(value);

    result.textContent = value + " °F = " + answer.toFixed(1) + " °C";
});
