const display = document.querySelector('.display');

function appendDisplay(keys) {
    display.value += keys;
}

function clearDisplay() {
    display.value = "";
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
}

function sin() {
    display.value = Math.sin(toRadians(display.value));
}

function cos() {
    display.value = Math.cos(toRadians(display.value));
}

function tan() {
    display.value = Math.tan(toRadians(display.value));
}

function csc() {
    display.value = 1 / Math.sin(toRadians(display.value));
}

function sec() {
    display.value = 1 / Math.cos(toRadians(display.value));
}

function cot() {
    display.value = 1 / Math.tan(toRadians(display.value));
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

VANTA.NET({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x960031,
    backgroundColor: 0x1a1a1b,
    maxDistance: 23.00,
    spacing: 17.00
});