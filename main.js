function calculateBMI() {
    let weightInput = document.getElementById("weight");
    let weightValue = parseFloat(weightInput.value);

    let heightFeetInput = document.getElementById('height-ft');
    let heightFeetValue = parseFloat(heightFeetInput.value);

    let heightInchInput = document.getElementById('height-inch');
    let heightInchValue = parseFloat(heightInchInput.value);

    let totalInch = heightFeetValue * 12 + heightInchValue;

    let heightMeter = totalInch * 0.0254;

    const errorMsg = document.getElementById('error-msg');

    if (isValidInput(weightValue, heightFeetValue, heightInchValue)) {
        
        errorMsg.classList.add('d-none');

        const bmi = weightValue / (heightMeter * heightMeter);

        // Setting bmi value to webpage
        document.getElementById('bmi-value').innerText = bmi.toFixed(2);

        let bmiStatus = getStatus(bmi);
        // Setting bmi status to webpage
        document.getElementById('bmi-status').innerText = bmiStatus;

    }
    else {
        // Displaying input error
        errorMsg.classList.remove('d-none');
    }

}

// Arrow Function
const  getStatus = (bmi) => {
    if (bmi < 18.5) {
        return 'Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Healthy';
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        return "Obese";
    }
    else if (bmi >= 35 && bmi <= 39.9) {
        return "Severely Obese";
    }
    else {
        return "Morbidly Obese";
    }
}

function isValidInput()
{
    let valid = true;

    for (const value of arguments){
        console.log(value);
        if (isNaN(value) || value < 0){
            valid = false;
            break;
        }
    }
    return valid;
}