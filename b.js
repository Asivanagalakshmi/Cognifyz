// Get the button element by its ID
const colorButton = document.getElementById('colorButton');

// Function to change the button's background color when clicked
colorButton.addEventListener('click', function () {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   
    // Change the button's background color
    colorButton.style.backgroundColor = randomColor;
});