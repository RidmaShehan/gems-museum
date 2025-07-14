/**
 * MOBILE COMPONENT
 * ========================================
 */

class MobileComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileOptimizations();
        this.setupTouchGestures();
        this.setupMobilePerformance();
    }

    setupMobileOptimizations() {
        // Disable hover effects on mobile
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            // Add mobile-specific classes
            document.body.classList.add('mobile-device');
            
            // Optimize scrolling performance
            document.addEventListener('touchstart', function() {}, {passive: true});
            document.addEventListener('touchmove', function() {}, {passive: true});
        }
    }

    setupTouchGestures() {
        // Add swipe gestures for mobile navigation
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        document.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, {passive: true});
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            // Swipe detected - could be used for navigation
            // For now, just log the swipe direction
            if (diff > 0) {
                console.log('Swipe left');
            } else {
                console.log('Swipe right');
            }
        }
    }

    setupMobilePerformance() {
        // Optimize animations for mobile
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Reduce animation complexity on mobile
            const animatedElements = document.querySelectorAll('.floating-gem, .animated-bg');
            animatedElements.forEach(el => {
                el.style.animationDuration = '8s'; // Slower animations for better performance
            });
        }
    }

    // Method to get mobile CSS
    static getCSS() {
        return `
        /* Mobile Component Styles */
        
        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
            /* Increase touch targets */
            .nav-link {
                padding: 15px 10px;
                min-height: 44px;
            }
            
            .btn {
                min-height: 44px;
                padding: 12px 25px;
            }
            
            .gem-card,
            .history-card,
            .feature-card {
                cursor: pointer;
                -webkit-tap-highlight-color: rgba(0,0,0,0.1);
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
            }
            
            /* Disable hover effects on touch devices */
            .gem-card:hover,
            .history-card:hover,
            .feature-card:hover {
                transform: none;
            }
            
            /* Active state for touch feedback */
            .gem-card:active,
            .history-card:active,
            .feature-card:active {
                transform: scale(0.98);
                transition: transform 0.1s ease;
            }
            
            /* Mobile-specific navbar */
            .navbar-collapse {
                background: rgba(44, 62, 80, 0.98);
                border-radius: 10px;
                margin-top: 10px;
                padding: 10px;
            }
            
            /* Better mobile scrolling */
            body {
                -webkit-overflow-scrolling: touch;
                overflow-x: hidden;
            }
            
            /* Mobile-optimized buttons */
            .btn {
                border-radius: 25px;
                font-weight: 600;
                letter-spacing: 0.5px;
            }
            
            /* Mobile card shadows */
            .gem-card,
            .history-card,
            .feature-card {
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            
            /* Mobile timeline optimization */
            .timeline-content {
                margin-bottom: 20px;
            }
            
            /* Mobile footer optimization */
            .footer-links a {
                padding: 8px 12px;
                border-radius: 20px;
                background: rgba(255,255,255,0.1);
                margin: 5px;
                display: inline-block;
            }
            
            .footer-links a:hover {
                background: rgba(255,255,255,0.2);
            }
        }

        /* Mobile Device Specific Styles */
        .mobile-device {
            /* Optimize for mobile performance */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .mobile-device .hero {
            background-attachment: scroll;
        }

        .mobile-device .floating-gem {
            animation-duration: 8s;
        }

        /* Mobile Navigation Enhancements */
        @media (max-width: 767.98px) {
            .navbar-toggler {
                border: none;
                padding: 8px;
                border-radius: 8px;
                background: rgba(255,255,255,0.1);
            }
            
            .navbar-toggler:focus {
                box-shadow: none;
                outline: none;
            }
            
            .navbar-toggler-icon {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
            }
            
            /* Mobile section spacing */
            .section {
                padding: 30px 0;
            }
            
            /* Mobile card spacing */
            .gem-card,
            .history-card,
            .feature-card {
                margin: 10px 0;
            }
            
            /* Mobile contact section */
            .contact-section .col-md-6 {
                margin-bottom: 30px;
            }
            
            /* Mobile button spacing */
            .btn {
                margin: 5px;
            }
        }

        /* High DPI Display Optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .hero {
                background-attachment: scroll; /* Better performance on high DPI */
            }
        }

        /* Landscape Mobile Optimization */
        @media (max-width: 767.98px) and (orientation: landscape) {
            .hero {
                height: 100vh;
                padding-top: 80px; /* Account for navbar */
            }
            
            .hero-content h1 {
                font-size: 2rem;
            }
            
            .hero-content p {
                font-size: 1rem;
            }
            
            .section {
                padding: 30px 0;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileComponent;
} 