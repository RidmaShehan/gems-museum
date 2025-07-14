/**
 * FEATURES COMPONENT
 * ========================================
 */

class FeaturesComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupClickEffects();
        this.setupCardAnimations();
    }

    setupClickEffects() {
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', function() {
                // Add a pulse effect
                this.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });
    }

    setupCardAnimations() {
        // Add staggered animation delays
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Method to get features HTML
    static getHTML() {
        return `
        <section id="features" class="section interactive-feature">
            <div class="container">
                <h2 class="section-title zoom-in" style="color: white;">Interactive Museum Features</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="feature-card bounce-in stagger-animation" data-delay="0.1">
                            <div class="feature-icon">
                                <i class="fas fa-vr-cardboard"></i>
                            </div>
                            <h4>Virtual Reality Tours</h4>
                            <p>Experience gem mining underground with our immersive VR technology.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-card scale-in stagger-animation" data-delay="0.2">
                            <div class="feature-icon">
                                <i class="fas fa-microscope"></i>
                            </div>
                            <h4>Gem Analysis Lab</h4>
                            <p>Watch our experts analyze gems using state-of-the-art equipment.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-card slide-in-right stagger-animation" data-delay="0.3">
                            <div class="feature-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h4>AR Gem Guide</h4>
                            <p>Use our mobile app to get detailed information about each gem on display.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="feature-card rotate-in stagger-animation" data-delay="0.4">
                            <div class="feature-icon">
                                <i class="fas fa-hands-helping"></i>
                            </div>
                            <h4>Hands-On Workshops</h4>
                            <p>Learn traditional gem cutting and polishing techniques from master craftsmen.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-card flip-in stagger-animation" data-delay="0.5">
                            <div class="feature-icon">
                                <i class="fas fa-store"></i>
                            </div>
                            <h4>Authentic Gem Shop</h4>
                            <p>Purchase certified Sri Lankan gems directly from the source.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // Method to get features CSS
    static getCSS() {
        return `
        /* Features Component Styles */
        .interactive-feature {
            background: var(--dark-bg);
            color: white;
            padding: 60px 0;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
        }

        .feature-card:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-10px);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            color: var(--gold-color);
        }

        .feature-card h4 {
            margin-bottom: 15px;
            color: white;
        }

        .feature-card p {
            color: #ccc;
        }

        /* Mobile Features Styles */
        @media (max-width: 575.98px) {
            .feature-card {
                padding: 25px 20px;
                margin: 15px 0;
            }
            
            .feature-icon {
                font-size: 2.5rem;
                margin-bottom: 15px;
            }
            
            .feature-card h4 {
                font-size: 1.2rem;
            }
            
            .feature-card p {
                font-size: 0.9rem;
            }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            .feature-card {
                margin: 15px 0;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FeaturesComponent;
} 