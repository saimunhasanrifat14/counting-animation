let valueDisplays = document.querySelectorAll(".number")
let interval = 3000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.textContent);
    let steps = 100;
    let stepValue = endValue / steps;
    let duration = interval / steps;

    let counter = setInterval(() => {
        startValue += stepValue;
        valueDisplays.textContent = Math.floor(startValue);
        if (startValue >= endValue) {
            clearInterval(counter);
            valueDisplays.textContent = endValue;
            valueDisplays.parentElement.style.color = "red";
        }
    }, duration);
})
