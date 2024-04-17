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
  const formSubmitButton = document.querySelector('.form-submit-button');
  const orderProjectLink = document.querySelector('.header-link-mobile');

  mobileMenuCloseBtn.addEventListener('click', closeMenu);

  menuItems.forEach(function (item) {
    item.addEventListener('click', closeMenu);
  });

  formSubmitButton.addEventListener('click', closeMenu);

  orderProjectLink.addEventListener('click', closeMenu);
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
