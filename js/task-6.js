const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = '10px';
        fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
}

function onCreateItems() {
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('#controls input');

    createButton.addEventListener('click', () => {
        const amount = Number(input.value.trim());

        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
        } else {
            alert('Please enter a number between 1 and 100.');
        }

        input.value = '';
    });

    destroyButton.addEventListener('click', destroyBoxes);
}

onCreateItems();