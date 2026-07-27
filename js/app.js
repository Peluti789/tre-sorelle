document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.04)';
        }
    });
});