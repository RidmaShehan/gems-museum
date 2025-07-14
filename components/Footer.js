/**
 * FOOTER COMPONENT
 * ========================================
 */

class FooterComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupFooterInteractions();
        this.setupSocialLinks();
    }

    setupFooterInteractions() {
        // Add hover effects for footer links
        document.querySelectorAll('.footer-links a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    setupSocialLinks() {
        // Add hover effects for social links
        document.querySelectorAll('.social-links a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.1)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Method to get footer HTML
    static getHTML() {
        return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="#home">Home</a>
                        <a href="#history">History</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#timeline">Timeline</a>
                        <a href="#features">Features</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <p>&copy; 2025 Sri Lankan Gem Museum. All rights reserved.</p>
                </div>
            </div>
        </footer>
        `;
    }

    // Method to get footer CSS
    static getCSS() {
        return `
        /* Footer Component Styles */
        .footer {
            background: var(--primary-color);
            color: white;
            padding: 40px 0;
            text-align: center;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            transition: all 0.3s ease;
            padding: 8px 12px;
            border-radius: 20px;
            background: rgba(255,255,255,0.1);
            display: inline-block;
        }

        .footer-links a:hover {
            color: var(--gold-color);
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        .social-links a {
            color: white;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: all 0.3s ease;
            padding: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            display: inline-block;
        }

        .social-links a:hover {
            color: var(--gold-color);
            transform: translateY(-3px) scale(1.1);
            background: rgba(255,255,255,0.2);
        }

        /* Mobile Footer Styles */
        @media (max-width: 575.98px) {
            .footer-content {
                flex-direction: column;
                gap: 20px;
                text-align: center;
            }
            
            .footer-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 15px;
            }
            
            .footer-links a {
                margin: 0 5px;
                padding: 6px 10px;
                font-size: 0.9rem;
            }
            
            .social-links a {
                margin: 0 5px;
                font-size: 1.3rem;
                padding: 8px;
            }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
            .footer-content {
                flex-direction: column;
                gap: 20px;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FooterComponent;
} 