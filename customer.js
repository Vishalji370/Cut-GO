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
