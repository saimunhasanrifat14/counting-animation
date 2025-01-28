let valueDisplays = document.querySelectorAll(".number")
let interval = 4000;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.textContent);
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(() => {
        startValue++;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
            valueDisplays.parentElement.style.color = "red";
        }
    }, duration);
})