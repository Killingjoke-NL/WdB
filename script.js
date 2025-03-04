// Carousel functionaliteit
document.addEventListener('DOMContentLoaded', () => {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Carousel Navigation
    function scrollProjects(direction) {
        const projectWidth = document.querySelector('.project-card').offsetWidth + 30;
        projectsWrapper.scrollBy({
            top: 0,
            left: direction * projectWidth,
            behavior: 'smooth'
        });
    }

    nextBtn.addEventListener('click', () => scrollProjects(1));
    prevBtn.addEventListener('click', () => scrollProjects(-1));
}); 