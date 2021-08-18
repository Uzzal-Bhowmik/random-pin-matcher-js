function getPin() {
    let initialPin = Math.round(Math.random() * 10000);
    initialPin = initialPin.toString();
    if (initialPin.length == 3) {
        return (initialPin + initialPin[0]);
    }
    else {
        return initialPin;
    }
};
function generatePin() {
    const pin = getPin();
    document.getElementById('generate-pin-field').value = pin;
};

document.getElementById('calculator-parent').addEventListener('click', function (event) {
    const clickedOn = event.target.innerText;
    const displayPanel = document.getElementById('display-panel');
    if (isNaN(clickedOn)) {
        if (clickedOn == "C") {
            displayPanel.value = ''
        }
        else if (clickedOn == '<') {
            displayPanel.value = displayPanel.value.slice(0, -1);
        }
    }
    else {
        displayPanel.value = displayPanel.value + clickedOn;
    }
});

function verifyPin() {
    const generatedPinField = document.getElementById('generate-pin-field');
    const generatedPin = generatedPinField.value;

    const typedPinField = document.getElementById('display-panel');
    const typedPin = typedPinField.value;

    const notMatchedMsg = document.getElementById('not-matched-msg');
    const matchedMsg = document.getElementById('matched-msg');

    if (generatedPin == typedPin) {
        matchedMsg.style.display = 'block';
        notMatchedMsg.style.display = 'none';
    }
    else {
        matchedMsg.style.display = 'none';
        notMatchedMsg.style.display = 'block';

        // updating trial left 
        const trialLeft = document.getElementById('trial-left');
        trialLeft.innerText = parseInt(trialLeft.innerText) - 1;
        if (parseInt(trialLeft.innerText) == 0) {
            window.alert("You have 0 chances left :(")
            generatedPinField.value = '';
            trialLeft.innerText = '3';
            notMatchedMsg.style.display = 'none';
        }

    }
    typedPinField.value = '';
}
const product = 5; const price = '7'; const subTotal = product * price; const tax = subTotal / 10; const total = subTotal + tax;


console.log(total);