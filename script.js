// Smooth scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const signupSection = document.getElementById('signup');
    signupSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Form submission handler
document.getElementById('waitlistForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const submitBtn = this.querySelector('.submit-button');
    
    // Get form data
    const formData = {
        email: document.getElementById('email').value,
        suspected_error: document.querySelector('input[name="suspected_error"]:checked').value,
        concern: document.getElementById('concern').value,
        would_pay: document.querySelector('input[name="would_pay"]:checked').value,
        timestamp: new Date().toISOString(),
        source: 'landing_page'
    };
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';
    
    try {
        // Log to console for now (you'll replace this with your backend)
        console.log('Waitlist signup:', formData);
        
        // TODO: Replace with your actual backend endpoint
        // Options:
        // 1. Formspree: await fetch('https://formspree.io/f/YOUR-ID', {...})
        // 2. Google Sheets via Apps Script
        // 3. Your own backend API
        // 4. Email service like EmailOctopus
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = '🎉 Success! You are on the waitlist. Check your email soon.';
        
        // Reset form
        this.reset();
        
        // Optional: Track with analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'waitlist_signup', {
                'event_category': 'engagement',
                'event_label': 'landing_page'
            });
        }
        
        // Scroll to success message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    } catch (error) {
        console.error('Error submitting form:', error);
        formMessage.className = 'form-message error';
        formMessage.textContent = '❌ Something went wrong. Please try again or email us directly.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Join Waitlist';
    }
});

// Add animation on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all major sections
document.querySelectorAll('.problem-card, .step, .feature, .pricing-card, .proof-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Update stats counter animation (optional enhancement)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when hero comes into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            // Animate first stat (dollar amount)
            if (statNumbers[0]) {
                const text = statNumbers[0].textContent;
                if (text.includes('$')) {
                    statNumbers[0].textContent = '$0';
                    animateValue(statNumbers[0], 0, 180, 2000);
                    statNumbers[0].textContent = '$' + statNumbers[0].textContent.replace('$', '');
                }
            }
            
            // Animate second stat (people count)
            if (statNumbers[1]) {
                animateValue(statNumbers[1], 0, 247, 2000);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    statsObserver.observe(heroContent);
}

// Form validation feedback
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    if (this.value && !this.validity.valid) {
        this.style.borderColor = '#FF3B30';
    } else if (this.value && this.validity.valid) {
        this.style.borderColor = '#00C805';
    }
});

emailInput.addEventListener('input', function() {
    if (this.style.borderColor === 'rgb(255, 59, 48)') {
        this.style.borderColor = '#444';
    }
});

// Track scroll depth for analytics (optional)
let maxScroll = 0;
window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = Math.floor(scrollPercent / 25) * 25; // Track in 25% increments
        
        if (typeof gtag !== 'undefined' && maxScroll > 0) {
            gtag('event', 'scroll_depth', {
                'event_category': 'engagement',
                'event_label': maxScroll + '%',
                'value': maxScroll
            });
        }
    }
});

console.log('PayCheck Shield - Landing page loaded successfully');
console.log('Form submissions will be logged to console until backend is connected');
