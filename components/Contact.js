/**
 * CONTACT COMPONENT
 * ========================================
 */

class ContactComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupContactInteractions();
        this.setupButtonEffects();
    }

    setupContactInteractions() {
        // Add hover effects for contact information
        document.querySelectorAll('.contact-info').forEach(info => {
            info.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            info.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    setupButtonEffects() {
        // Add ripple effects to contact buttons
        document.querySelectorAll('.contact-section .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.5);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    left: ${e.clientX - this.offsetLeft}px;
                    top: ${e.clientY - this.offsetTop}px;
                    width: 20px;
                    height: 20px;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Method to get contact HTML
    static getHTML() {
        return `
        <section id="contact" class="section contact-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
            <div class="container">
                <h2 class="section-title bounce-in" style="color: white;">Visit Our Museum</h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="slide-in-left stagger-animation contact-info" data-delay="0.1">
                            <h4><i class="fas fa-map-marker-alt"></i> Location</h4>
                            <p>Kaluwella,Galle, Sri Lanka</p>
                            
                            <h4><i class="fas fa-clock"></i> Opening Hours</h4>
                            <p>Monday - Saturday: 9:00 AM - 5:00 PM<br>
                            Sunday: 9:00 AM - 2:00 PM</p>
                            
                            <h4><i class="fas fa-phone"></i> Contact</h4>
                            <p>Phone: 091 2228 087<br>
                            Email: Aida museum@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="slide-in-right stagger-animation contact-info" data-delay="0.2">
                            <h4><i class="fas fa-ticket-alt"></i> Admission</h4>
                            <p>Adults: RS100.00<br>
                            Children (5-12): RS50.00<br>
                            Students: RS50.00<br>
                            Family Pass: RS75.00</p>
                            
                            <h4><i class="fas fa-language"></i> Languages</h4>
                            <p>Tours available in English, Sinhala, Tamil, and other languages upon request.</p>
                            
                            <div class="mt-4">
                                <a href="#" class="btn btn-outline-light me-2">Book Online</a>
                                <a href="#" class="btn btn-light">Download Brochure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // Method to get contact CSS
    static getCSS() {
        return `
        /* Contact Component Styles */
        .contact-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .contact-info {
            transition: all 0.3s ease;
            padding: 20px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            margin-bottom: 20px;
        }

        .contact-info:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .contact-section h4 {
            color: var(--gold-color);
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .contact-section p {
            margin-bottom: 20px;
            line-height: 1.6;
        }

        .contact-section .btn {
            transition: all 0.3s ease;
            border-radius: 25px;
            padding: 10px 25px;
            font-weight: 600;
        }

        .contact-section .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        /* Mobile Contact Styles */
        @media (max-width: 575.98px) {
            .contact-section h4 {
                font-size: 1.1rem;
                margin-top: 20px;
            }
            
            .contact-section p {
                font-size: 0.9rem;
            }
            
            .contact-section .col-md-6 {
                margin-bottom: 30px;
            }
            
            .contact-section .btn {
                margin: 5px;
                padding: 8px 20px;
                font-size: 0.9rem;
            }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            .contact-info {
                margin-bottom: 15px;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContactComponent;
} 