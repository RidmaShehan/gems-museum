/**
 * ANIMATIONS COMPONENT
 * ========================================
 */

class AnimationsComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
        this.setupScrollProgress();
        this.setupBackgroundAnimation();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = element.getAttribute('data-delay') || 0;
                    
                    // Add delay for stagger animations
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, delay * 1000);
                }
            });
        }, observerOptions);

        // Observe all animation elements
        const animationElements = document.querySelectorAll(`
            .fade-in, .slide-in-left, .slide-in-right, .scale-in, 
            .rotate-in, .stagger-animation, .bounce-in, .flip-in, 
            .zoom-in, .fade-up-delay
        `);
        
        animationElements.forEach(el => {
            observer.observe(el);
        });
    }

    setupSmoothScrolling() {
        // Enhanced smooth scrolling with easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const targetPosition = target.offsetTop - 80; // Account for navbar
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;

                    const easeInOutCubic = (t, b, c, d) => {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t * t + b;
                        t -= 2;
                        return c / 2 * (t * t * t + 2) + b;
                    };

                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }

                    requestAnimationFrame(animation);
                }
            });
        });
    }

    setupScrollProgress() {
        // Add scroll progress indicator
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(45deg, var(--gold-color), #e67e22);
            z-index: 9999;
            transition: width 0.1s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    setupBackgroundAnimation() {
        const animatedBg = document.querySelector('.animated-bg');
        if (animatedBg) {
            let hue = 0;

            setInterval(() => {
                hue += 1;
                animatedBg.style.background = `linear-gradient(45deg, 
                    hsl(${hue % 360}, 70%, 60%) 0%, 
                    hsl(${(hue + 60) % 360}, 70%, 60%) 100%)`;
            }, 100);
        }
    }

    // Method to get animations CSS
    static getCSS() {
        return `
        /* Animations Component Styles */
        
        /* Base scroll animation classes */
        .fade-in {
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Slide animations */
        .slide-in-left {
            opacity: 0;
            transform: translateX(-100px);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-left.visible {
            opacity: 1;
            transform: translateX(0);
        }

        .slide-in-right {
            opacity: 0;
            transform: translateX(100px);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
        }

        /* Scale animations */
        .scale-in {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scale-in.visible {
            opacity: 1;
            transform: scale(1) translateY(0);
        }

        /* Rotate animations */
        .rotate-in {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
            transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rotate-in.visible {
            opacity: 1;
            transform: rotate(0deg) scale(1);
        }

        /* Stagger animations for multiple elements */
        .stagger-animation {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stagger-animation.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Bounce animation */
        .bounce-in {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
            transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .bounce-in.visible {
            opacity: 1;
            transform: scale(1) translateY(0);
        }

        /* Flip animation */
        .flip-in {
            opacity: 0;
            transform: perspective(400px) rotateY(90deg);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flip-in.visible {
            opacity: 1;
            transform: perspective(400px) rotateY(0deg);
        }

        /* Zoom animation */
        .zoom-in {
            opacity: 0;
            transform: scale(0.5);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .zoom-in.visible {
            opacity: 1;
            transform: scale(1);
        }

        /* Fade up with delay */
        .fade-up-delay {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-up-delay.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Smooth scroll behavior */
        html {
            scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, var(--gold-color), #e67e22);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, #e67e22, var(--gold-color));
        }

        /* Scroll Progress Bar */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(45deg, var(--gold-color), #e67e22);
            z-index: 9999;
            transition: width 0.1s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* Enhanced animation performance */
        .fade-in,
        .slide-in-left,
        .slide-in-right,
        .scale-in,
        .rotate-in,
        .stagger-animation,
        .bounce-in,
        .flip-in,
        .zoom-in,
        .fade-up-delay {
            will-change: transform, opacity;
            backface-visibility: hidden;
            transform: translateZ(0);
        }

        /* Animation performance optimizations for mobile */
        @media (max-width: 768px) {
            .fade-in,
            .slide-in-left,
            .slide-in-right,
            .scale-in,
            .rotate-in,
            .stagger-animation,
            .bounce-in,
            .flip-in,
            .zoom-in,
            .fade-up-delay {
                transition-duration: 0.6s;
            }
        }

        /* Reduced Motion for Accessibility */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
            
            .floating-gem {
                animation: none !important;
            }
            
            .animated-bg {
                animation: none !important;
            }
        }

        /* Keyframe animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        @keyframes gradientShift {
            0% { background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); }
            100% { background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationsComponent;
} 