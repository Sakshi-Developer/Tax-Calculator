function calculateTax() {
    var grossIncome = parseFloat(document.getElementById('grossIncome').value);
    var extraIncome = parseFloat(document.getElementById('extraIncome').value);
    var ageGroup = document.getElementById('ageGroup').value;
    var deductions = parseFloat(document.getElementById('deductions').value);
    var totalIncome = grossIncome + extraIncome;

    var tax = 0;

    // Apply tax brackets based on age group and income
    if (ageGroup === 'under60') {
        if (totalIncome <= 250000) {
            tax = 0;
        } else if (totalIncome <= 500000) {
            tax = (totalIncome - 250000) * 0.05;
        } else if (totalIncome <= 1000000) {
            tax = 12500 + (totalIncome - 500000) * 0.1;
        } else {
            tax = 62500 + (totalIncome - 1000000) * 0.2;
        }
    } else if (ageGroup === '60to80') {
        if (totalIncome <= 300000) {
            tax = 0;
        } else if (totalIncome <= 500000) {
            tax = (totalIncome - 300000) * 0.05;
        } else if (totalIncome <= 1000000) {
            tax = 10000 + (totalIncome - 500000) * 0.1;
        } else {
            tax = 60000 + (totalIncome - 1000000) * 0.2;
        }
    } else { // above80
        if (totalIncome <= 500000) {
            tax = 0;
        } else if (totalIncome <= 1000000) {
            tax = (totalIncome - 500000) * 0.2;
        } else {
            tax = 100000 + (totalIncome - 1000000) * 0.3;
        }
    }

    // Apply deductions
    tax -= deductions;

    // Ensure tax is non-negative
    tax = Math.max(0, tax);

    document.getElementById('taxAmount').innerText = "Your tax amount is: $" + tax.toFixed(2);
}

