document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open-btn');
  const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');

  mobileMenuOpenBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.add('is-open');
  });

  const dropdownLinks = document.querySelectorAll('.dropdown');

  dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (window.innerWidth > 768) {
        const dropdownContent = link.nextElementSibling;
        dropdownContent.classList.toggle('is-open');
      }
    });
  });

  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  mobileMenuCloseBtn.addEventListener('click', function () {
    mobileMenuWrapper.classList.remove('is-open');
  });
});

// ---------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
 
  const closeBtn = document.querySelector('.mobile-menu-close-btn');
 
  const menuItems = document.querySelectorAll('.mobile-menu-link');

 
  function closeMenu() {
    const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
    mobileMenuWrapper.style.display = 'none';
  }

 
  closeBtn.addEventListener('click', function () {
    closeMenu();
  });

 
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      closeMenu();
    });
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
