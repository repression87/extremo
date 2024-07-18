document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    
    calculateButton.addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height').value) / 100;
        const weight = parseFloat(document.getElementById('weight').value);
        const resultDiv = document.getElementById('result');
        const interpretationDiv = document.getElementById('interpretation');

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = 'Введите корректные значения роста и веса';
            interpretationDiv.textContent = '';
            return;
        }

        const bmi = weight / (height * height);
        resultDiv.textContent = `Ваш ИМТ: ${bmi.toFixed(2)}`;

        if (bmi < 18.5) {
            interpretationDiv.textContent = 'Вес ниже нормы';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            interpretationDiv.textContent = 'Вес в норме';
        } else {
            interpretationDiv.textContent = 'Вес выше нормы';
        }
    });
});
