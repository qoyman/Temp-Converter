const Textbox = document.getElementById("Textbox");
const celsiusBtn = document.getElementById("celsiusBtn");
const fahrenheitBtn = document.getElementById("fahrenheitBtn");
const result = document.getElementById("result");
let temp;


function convert() {
    if (celsiusBtn.checked) {
        temp = Number(Textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `The temperature in Celsius is ${temp.toFixed(2)}°C.`;
    } else if (fahrenheitBtn.checked) {
        temp = Number(Textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = `The temperature in Fahrenheit is ${temp.toFixed(2)}°F.`;
    }
    else {
        result.textContent = `Please select a conversion type.`;
    }
}


