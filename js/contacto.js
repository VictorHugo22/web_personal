document.querySelectorAll('.contact__copy').forEach((button) => {
    button.addEventListener('click', async () => {
        const email = button.dataset.copy;
        const originalText = button.textContent;

        try {
            await navigator.clipboard.writeText(email);
            button.textContent = 'Copiado';
            button.classList.add('copied');

            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 1600);
        } catch (error) {
            button.textContent = 'Error';
            setTimeout(() => {
                button.textContent = originalText;
            }, 1600);
        }
    });
});