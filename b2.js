// Function to add two numbers and display the result
function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
   
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        document.getElementById('result').textContent = 'Result: ' + result;
    } else {
        document.getElementById('result').textContent = 'Invalid input';
    }
}