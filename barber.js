
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
