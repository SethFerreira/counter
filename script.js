const buttons = document.querySelectorAll('.clicks li');
const counterDisplay = document.getElementById('counter');
let counter = 0;

const updateCounter = event => {
    const button = event.target.innerHTML;
    if (button === 'Increase') {
        counter++;
    } else if (button === 'Decrease') {
        counter--;
    } else if (button === 'Reset') {
        counter = 0;
    } else {
        console.log('Unknown button pressed');
        return;
    }
    counterDisplay.innerHTML = counter;
}

buttons.forEach(button => button.addEventListener('click', updateCounter));
