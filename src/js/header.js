document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');

  mobileMenuOpenBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.add('is-open');
  });

  const dropdownLinks = document.querySelectorAll('.dropdown');

  dropdownLinks.forEach(function (link) {
    const dropdownContent = link.nextElementSibling;
    const dropdownLinksContainer = link.parentElement.parentElement;
    
    
    dropdownContent.classList.remove('is-open');
    dropdownLinksContainer.classList.remove('is-open');
    
    link.addEventListener('click', function (event) {
      dropdownContent.classList.toggle('is-open'); 
      dropdownLinksContainer.classList.toggle('is-open'); 
    });
  });

  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.remove('is-open');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});
