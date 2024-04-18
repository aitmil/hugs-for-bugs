import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", function() {
    const accordions = Array.from(document.querySelectorAll('.accordion-container'));
    const accordion = new Accordion(accordions, {
        duration: 400,
        showFirstItem: false,
        elementClass: 'faq-sector',
        triggerClass: 'faq-accordion',
        panelClass: 'faq-sector-description',
        headerClass: 'faq-sector-title',
        beforeOpen: (currElement) => {
            const panelContent = currElement.querySelector('.faq-sector-description');
            panelContent.style.display = 'block';
        },
        beforeClose: (currElement) => {
            const panelContent = currElement.querySelector('.faq-sector-description');
            panelContent.style.display = 'none';
        },
    });
});

  const sectors = document.querySelectorAll('.faq-sector');

    sectors.forEach(sector => {
        sector.addEventListener('click', function() {
            const arrow = this.querySelector('.faq-arrow');

            arrow.classList.toggle('rotate');
        });
    });