function getCurrentTimeHex() {
    const myDate = new Date();
    const hours = myDate.getHours().toString().padStart(2, '0');
    const minutes = myDate.getMinutes().toString().padStart(2, '0');
    const seconds = myDate.getSeconds().toString().padStart(2, '0');
    return `#${hours}${minutes}${seconds}`;
}

function changeColor() {
    const hexCode = getCurrentTimeHex();
    document.body.style.backgroundColor = hexCode;
    console.log(hexCode);
}

// Assuming there's a button with id="btn" in your HTML
const button = document.getElementById("btn"); 
button.addEventListener('click', changeColor);

