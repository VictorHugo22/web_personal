const grid = document.querySelector('.certificados__grid');
let animationId = null;
let currentOffset = 0;
let speed = 0.30;

function getOriginalCards() {
    return Array.from(
        grid.querySelectorAll('.certificado-card:not(.certificado-card--clone)')
    );
}

function removeClones() {
    grid.querySelectorAll('.certificado-card--clone').forEach(clone => clone.remove());
}

function cloneCards() {
    const originals = getOriginalCards();
    originals.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('certificado-card--clone');
        grid.appendChild(clone);
    });
}

function getOriginalWidth() {
    const originals = getOriginalCards();
    if (!originals.length) return 0;

    const styles = window.getComputedStyle(grid);
    const gap = parseFloat(styles.gap) || 0;

    let totalWidth = 0;

    originals.forEach((card, index) => {
        totalWidth += card.getBoundingClientRect().width;
        if (index < originals.length - 1) {
            totalWidth += gap;
        }
    });

    return totalWidth;
}

function animateGallery() {
    const originalWidth = getOriginalWidth();
    if (!originalWidth) return;

    currentOffset -= speed;

    if (Math.abs(currentOffset) >= originalWidth) {
        currentOffset = 0;
    }

    grid.style.transform = `translateX(${currentOffset}px)`;
    animationId = requestAnimationFrame(animateGallery);
}

function setupGallery() {
    cancelAnimationFrame(animationId);

    removeClones();
    currentOffset = 0;
    grid.style.transform = 'translateX(0)';

    speed = window.innerWidth <= 768 ? 0.12 : 0.30;

    cloneCards();

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            animateGallery();
        });
    });
}

function waitForImagesAndStart() {
    const images = Array.from(
        grid.querySelectorAll('.certificado-card img')
    );

    let loaded = 0;

    function done() {
        loaded++;
        if (loaded === images.length) {
            setupGallery();
        }
    }

    if (!images.length) {
        setupGallery();
        return;
    }

    images.forEach(img => {
        if (img.complete) {
            done();
        } else {
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
        }
    });
}

window.addEventListener('load', waitForImagesAndStart);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupGallery, 200);
});