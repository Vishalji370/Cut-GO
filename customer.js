function toggleFAQ(button) {
    const item = button.closest('.faq-item');
    const allItems = document.querySelectorAll('.faq-item');

    // Close others if needed
    allItems.forEach(i => {
        if (i !== item) {
            i.classList.remove('open');
        }
    });

    // Toggle current
    item.classList.toggle('open');
}
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = "";
  sections.forEach(section => {
    const top = window.scrollY;
    if (top >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
