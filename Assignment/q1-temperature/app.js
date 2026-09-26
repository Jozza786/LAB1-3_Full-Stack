//jozza

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}
// Convert Fahrenheit to Celsius
const fahrenheitToCelsius = (f) => {
    return (f - 32) * 5 / 9;
};
const temperature = document.getElementById("temperature");
const result = document.getElementById("result");
document.getElementById("toFahrenheit").addEventListener("click", function () {
    
    if (temperature.value === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }
    const value = Number(temperature.value);
    const answer = celsiusToFahrenheit(value);

    result.textContent = value + " °C = " + answer.toFixed(1) + " °F";
});

document.getElementById("toCelsius").addEventListener("click", function () {

    if (temperature.value === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    const value = Number(temperature.value);
    const answer = fahrenheitToCelsius(value);

    result.textContent = value + " °F = " + answer.toFixed(1) + " °C";
});
