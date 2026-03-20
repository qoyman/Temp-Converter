const Textbox = document.getElementById("Textbox");
const celsiusBtn = document.getElementById("celsiusBtn");
const fahrenheitBtn = document.getElementById("fahrenheitBtn");
const result = document.getElementById("result");

function convert() {

    let temp = Textbox.value;

    if (celsiusBtn.checked) {

        fetch(`/api/convert?value=${temp}&mode=c`)
        .then(res => res.json())
        .then(data => {
            result.textContent =
            `The temperature in Celsius is ${data.result}${data.unit}.`;
        });

    }

    else if (fahrenheitBtn.checked) {

        fetch(`/api/convert?value=${temp}&mode=f`)
        .then(res => res.json())
        .then(data => {
            result.textContent =
            `The temperature in Fahrenheit is ${data.result}${data.unit}.`;
        });

    }

    else {
        result.textContent = `Please select a conversion type.`;
    }

}
