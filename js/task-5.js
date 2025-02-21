const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function changeBodyBgColor() {
    const body = document.body
    const textElement = document.querySelector('.color');
    const buttonElement = document.querySelector('.change-color');

    buttonElement.addEventListener('click', (event) => {
        event.preventDefault()
        const randomColor = getRandomHexColor();
        textElement.style.color = randomColor;
        body.style.background = randomColor;
    });
}

changeBodyBgColor();