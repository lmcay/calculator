const display = document.querySelector('.display');
let equation = localStorage.getItem('equation') || '';

display.value = equation;

function appendDisplay(keys) {
    equation += keys;
    localStorage.setItem('equation', equation);
    display.value = equation;
}

function clearDisplay() {
    display.value = "";
    equation = '';
    localStorage.removeItem('equation');
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
    equation = display.value;
}

function trigo(concept){
    if(concept === 'sin'){
        display.value = Math.sin(toRadians(display.value));
    } else if (concept === 'cos') {
        display.value = Math.cos(toRadians(display.value));
    } else if (concept === 'tan') {
        display.value = Math.tan(toRadians(display.value));
    } else if (concept === 'csc') {
        display.value = 1 / Math.sin(toRadians(display.value));
    } else if (concept === 'sec') {
        display.value = 1 / Math.cos(toRadians(display.value));
    } else if (concept === 'cot') {
        display.value = 1 / Math.tan(toRadians(display.value));
    } else if (concept === 'root') {
        display.value = Math.sqrt(display.value);
    }
}


function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function calculate() {
    try {
        display.value = eval(display.value);
        equation = display.value;
    }
    catch(error) {
        display.value = "Error";
        equation = '';
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