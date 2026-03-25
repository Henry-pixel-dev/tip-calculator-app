const billInput = document.getElementById('BillNumber');
const tipButtons = document.querySelectorAll('.tip-button');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people-number');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset-button');
const errorMessage = document.getElementById('error-message');

let amount = 0;
let tipPercentage = 0;
let numberOfPeople = 1;


billInput.addEventListener('input', (e) => {
    let inputedAmount = e.target.value;
    amount = Number(inputedAmount);
    console.log(amount)
    calculateTip();
})

tipButtons.forEach(tipButton => {
    tipButton.addEventListener('click', function(e) {
        e.preventDefault()
        let value = this.dataset.value;

        tipPercentage = Number(value);
        
        tipButtons.forEach(button => button.classList.remove('active'));
        tipButton.classList.toggle('active');
        calculateTip();
    })
});

customTipInput.addEventListener('input', (e) => {
    let customValue = e.target.value;
    tipPercentage = Number(customValue);
    tipButtons.forEach(button => button.classList.remove('active'));
    calculateTip();
})

peopleInput.addEventListener('input', (e) => {
    let inputedPeople = e.target.value;
    numberOfPeople = Number(inputedPeople);
    calculateTip();
})

peopleInput.addEventListener('blur', () => {
    if (numberOfPeople === 0) {
        showError();
    } else {
        hideError();
    }
});

function showError() {
    errorMessage.classList.remove('hidden');
    peopleInput.classList.add('border-red-500');
}

function hideError() {
    errorMessage.classList.add('hidden');
    peopleInput.classList.remove('border-red-500');
}

function calculateTip() {
    if (numberOfPeople === 0) {
        showError();
        return;
    }

    if (!Number.isInteger(numberOfPeople) || numberOfPeople <= 0) {
        return;
    }

    if (amount === 0 && tipPercentage === 0) {
        return;
    }

    
    const tipAmount = (amount * (tipPercentage / 100)) / numberOfPeople;
    const totalAmount = (amount / numberOfPeople) + tipAmount;
    tipAmountDisplay.textContent = tipAmount.toFixed(2)
    totalAmountDisplay.textContent = totalAmount.toFixed(2)
}

function resetCalculator() {
    amount = 0;
    tipPercentage = 0;
    numberOfPeople = 1;
    billInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '1';
    tipAmountDisplay.textContent = '0.00';
    totalAmountDisplay.textContent = '0.00';
    tipButtons.forEach(button => button.classList.remove('active'));
    hideError();
}

resetButton.addEventListener('click', resetCalculator); 