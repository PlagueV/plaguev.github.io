// Update your calkids.js with these mobile enhancements

document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        // Make FAQ items more touch-friendly
        question.style.cursor = 'pointer';
        
        question.addEventListener('click', () => {
            const wasActive = question.classList.contains('active');
            
            // Close all first if not active
            if (!wasActive) {
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('show');
                });
            }
            
            // Toggle current
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
            
            // Smooth scroll to question if opening
            if (!wasActive && question.classList.contains('active')) {
                question.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        });
    });
    
    // Better touch feedback for buttons
    const buttons = document.querySelectorAll('button, a.btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        button.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });
    
    // Prevent zooming on double-tap
    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Handle iOS viewport height changes
    function handleViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    window.addEventListener('resize', handleViewportHeight);
    handleViewportHeight();
});