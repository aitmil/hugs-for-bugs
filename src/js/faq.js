import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", function() {
    const sectors = document.querySelectorAll('.faq-sector');

    sectors.forEach(sector => {
        sector.addEventListener('click', function() {
            const arrow = this.querySelector('.faq-arrow');
            const description = this.querySelector('.faq-sector-description');

            arrow.classList.toggle('rotate');
            description.classList.toggle('visually-hidden');
        });
    });

    new Accordion('.faq-section', {
        duration: 400,
        showFirstItem: false,
    });
});
