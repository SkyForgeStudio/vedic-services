document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.hero-arrow.prev');
    const nextBtn = document.querySelector('.hero-arrow.next');
    const heroSection = document.querySelector('.hero');
    
    let currentIndex = 0;
    let slideInterval;
    const intervalTime = 6000;
    let isHovering = false;

    function initSlider() {
        if (slides.length > 0) {
            startSlideShow();
        }
    }

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = (index + slides.length) % slides.length;
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startSlideShow() {
        if (!isHovering) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    function resetSlideShow() {
        stopSlideShow();
        startSlideShow();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetSlideShow();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetSlideShow();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetSlideShow();
        });
    });

    heroSection.addEventListener('mouseenter', () => {
        isHovering = true;
        stopSlideShow();
    });

    heroSection.addEventListener('mouseleave', () => {
        isHovering = false;
        startSlideShow();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetSlideShow();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetSlideShow();
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopSlideShow();
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startSlideShow();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (difference > swipeThreshold) {
            nextSlide(); 
        } else if (difference < -swipeThreshold) {
            prevSlide(); 
        }
    }

    initSlider();
});