document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');

  function openMenu() {
    mobileMenuWrapper.classList.add('is-open');
    mobileMenuOpenBtn.removeEventListener('click', openMenu);
  }

  function closeMenu() {
    mobileMenuWrapper.classList.remove('is-open');
    mobileMenuOpenBtn.addEventListener('click', openMenu);
  }

  mobileMenuOpenBtn.addEventListener('click', openMenu);

  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
  const menuItems = document.querySelectorAll('.mobile-menu-link');
  const orderProjectLink = document.querySelector('.header-link-mobile');

  mobileMenuCloseBtn.addEventListener('click', closeMenu);

  menuItems.forEach(function (item) {
    item.addEventListener('click', closeMenu);
  });

  orderProjectLink.addEventListener('click', closeMenu);
});

// ---------------------------------------------------------------

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

// ---------------------------------------------------------------

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
