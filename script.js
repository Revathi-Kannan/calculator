// Get all buttons by class name
const buttons = document.querySelectorAll('.calculator button');
        const display = document.getElementById('display');

        // Add event listener to each button
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const value = button.textContent;

                if (value === '=') {
                    // Evaluate the expression and set the result to the display
                    try {
                        display.value = eval(display.value);
                    } catch (error) {
                        display.value = 'Error';
                    }
                } else if (value === 'C') {
                    // Clear the display
                    display.value = '';
                } else {
                    // Append the clicked button value to the current input
                    display.value += value;
                }
            });
        });