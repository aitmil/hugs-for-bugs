document.addEventListener('DOMContentLoaded', function () {
    function scrollToElement(target) {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  
    document.querySelectorAll('.dropdown-link a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToElement(targetId);
      });
    });
  });
  