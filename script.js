document.addEventListener('DOMContentLoaded', () => {
    const toggleImage = document.querySelector('.toggle-image');

    // Example JavaScript: Toggle image visibility
    if (toggleImage) {
        toggleImage.addEventListener('click', () => {
            toggleImage.style.display = toggleImage.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Add a button to show/hide content
    const button = document.createElement('button');
    button.textContent = 'Toggle Content';
    document.body.insertBefore(button, document.querySelector('footer'));

    button.addEventListener('click', () => {
        const container = document.querySelector('.container');
        if (container) {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
        }
    });
});
