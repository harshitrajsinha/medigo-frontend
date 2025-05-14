document.addEventListener('DOMContentLoaded', () => {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const dynamicContent = document.getElementById('dynamic-content');

    const texts = [
        'Hello, World!',
        'Welcome to the Web!',
        'JavaScript is awesome!',
        'Keep exploring and learning!'
    ];

    changeTextBtn.addEventListener('click', () => {
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        dynamicContent.textContent = randomText;
    });
});
