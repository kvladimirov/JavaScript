function subtract() {
    let num1 = parseFloat($('#firstNumber').val());
    let num2 = parseFloat($('#secondNumber').val());
    let result = num1 - num2;
    let resultDiv = $('#result');
    resultDiv[0].textContent = result;
}
