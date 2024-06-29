document.addEventListener("DOMContentLoaded", () => {
    const calculatorKeys = [
        { key: '7', id: '7' }, { key: '8', id: '8' }, { key: '9', id: '9' }, { key: '/', id: 'divide' },
        { key: '4', id: '4' }, { key: '5', id: '5' }, { key: '6', id: '6' }, { key: '*', id: 'multiply' },
        { key: '1', id: '1' }, { key: '2', id: '2' }, { key: '3', id: '3' }, { key: '-', id: 'subtract' },
        { key: '0', id: '0' }, { key: '.', id: 'decimal' }, { key: '=', id: 'equal' }, { key: '+', id: 'add' },
        { key: 'C', id: 'clear' }
    ];

    const calculatorKeysContainer = document.getElementById("calculator-keys");
    const calculatorScreen = document.getElementById("result");
    let currentInput = "";

    calculatorKeys.forEach(({ key, id }) => {
        const button = document.getElementById(id);
        button.addEventListener("click", () => handleButtonClick(key));
    });

    document.addEventListener("keydown", (event) => {
        if (!/[0-9+\-*/.=C]/.test(event.key)) {
            alert("Only numbers are allowed");
            return;
        }
        handleButtonClick(event.key);
    });

    const handleButtonClick = (key) => {
        if (/[0-9.]/.test(key)) {
            currentInput += key;
            calculatorScreen.value = currentInput;
        } else if (/[+\-*/]/.test(key)) {
            currentInput += ` ${key} `;
            calculatorScreen.value = currentInput;
        } else if (key === '=') {
            try {
                currentInput = eval(currentInput).toString();
                calculatorScreen.value = currentInput;
            } catch {
                calculatorScreen.value = "Error";
                currentInput = "";
            }
        } else if (key === 'C') {
            currentInput = "";
            calculatorScreen.value = currentInput;
        }
    };
});
