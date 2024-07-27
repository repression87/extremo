const months = {
    winter: ['Декабрь', 'Январь', 'Февраль'],
    spring: ['Март', 'Апрель', 'Май'],
    summer: ['Июнь', 'Июль', 'Август'],
    autumn: ['Сентябрь', 'Октябрь', 'Ноябрь']
};

const colors = {
    winter: '#1E90FF',
    spring: '#00FA9A',
    summer: '#FFD700',
    autumn: '#FF8C00'
};

function showMonths(season) {
    const monthsContainer = document.getElementById('months-container');
    monthsContainer.innerHTML = '';
    const selectedMonths = months[season];
    selectedMonths.forEach(month => {
        const monthButton = document.createElement('button');
        monthButton.className = 'month';
        monthButton.style.backgroundColor = colors[season];
        monthButton.textContent = month;
        monthsContainer.appendChild(monthButton);
    });
}
