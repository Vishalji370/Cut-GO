// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all buttons that might navigate
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for CTA buttons (you can modify these to actual functionality)
    document.querySelectorAll('.btn').forEach(button => {
        if (button.textContent.includes('Find a Barber') || button.textContent.includes('Book a Slot')) {
            button.addEventListener('click', function() {
                alert('Customer app coming soon! Download from Play Store or App Store.');
            });
        } else if (button.textContent.includes('List Your Shop') || button.textContent.includes('Join the Network') || button.textContent.includes('Register Your Shop')) {
            button.addEventListener('click', function() {
                alert('Barber registration portal coming soon! Contact support@cutandgo.in');
            });
        } else if (button.textContent.includes('Download the App')) {
            button.addEventListener('click', function() {
                alert('App download links coming soon!');
            });
        }
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const fullText = heroTitle.getAttribute('data-text');
    heroTitle.innerHTML = ''; // Clear the original HTML
    let i = 0;

    function typeWriter() {
        if (i < fullText.length) {
            heroTitle.innerHTML += fullText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    setTimeout(typeWriter, 500);
}

    // Add mobile menu functionality (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Add scroll-to-top functionality
    

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove any loading overlay if present
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }
    });
});

// Add some utility functions
function animateOnScroll(element, animation = 'fade-in') {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animation);
            }
        });
    });
    
    observer.observe(element);
}

// Function to handle form submissions (if you add forms later)
function handleFormSubmission(formElement, callback) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        const submitBtn = formElement.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Loading...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            if (callback) {
                callback();
            }
        }, 2000);
    });
}

// Console log for debugging
console.log('Cut & Go landing page loaded successfully!');
console.log('For support, contact: support@cutandgo.in');

document.getElementById('customer-demo')?.addEventListener('click', function() {
  window.location.href = 'customer.html';
});
document.getElementById('barber-demo')?.addEventListener('click', function() {
  window.location.href = 'barber.html';
});
//navbar controller
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


