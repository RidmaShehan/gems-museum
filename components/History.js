/**
 * HISTORY COMPONENT
 * ========================================
 */

class HistoryComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupHoverEffects();
        this.setupCardAnimations();
    }

    setupHoverEffects() {
        document.querySelectorAll('.history-card').forEach(card => {
            // Check if device supports hover
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
            if (!isTouchDevice) {
                // Desktop hover effects
                card.addEventListener('mouseenter', function() {
                    this.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.background = 'white';
                });
            } else {
                // Mobile touch effects
                card.addEventListener('touchstart', function() {
                    this.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
                });
                
                card.addEventListener('touchend', function() {
                    this.style.background = 'white';
                });
            }
        });
    }

    setupCardAnimations() {
        // Add staggered animation delays
        document.querySelectorAll('.history-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Method to get history HTML
    static getHTML() {
        return `
        <section id="history" class="section history-section">
            <div class="container">
                <h2 class="section-title bounce-in">The Rich History of Sri Lankan Gems</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="history-card slide-in-left stagger-animation" data-delay="0.1">
                            <h3><i class="fas fa-crown"></i> Ancient Legacy</h3>
                            <p>Sri Lanka, known as the "Island of Gems," has been renowned for its precious stones for over 2,000 years. Ancient traders from Greece, Rome, and the Arab world came here seeking our legendary gems.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="history-card scale-in stagger-animation" data-delay="0.2">
                            <h3><i class="fas fa-mountain"></i> Geological Marvel</h3>
                            <p>The island's unique geological formation created perfect conditions for gem formation. The central highlands contain some of the world's most concentrated gem deposits.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="history-card slide-in-right stagger-animation" data-delay="0.3">
                            <h3><i class="fas fa-globe-asia"></i> Global Recognition</h3>
                            <p>Sri Lankan gems have adorned the crowns of royalty worldwide. The famous "Blue Belle of Asia" and "Star of Adam" are just two of our celebrated gemstones.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="history-card rotate-in stagger-animation" data-delay="0.4">
                            <h3><i class="fas fa-hammer"></i> Traditional Mining</h3>
                            <p>For centuries, Sri Lankan miners have used traditional methods passed down through generations. The skilled craftsmanship of gem cutting and polishing is an art form that continues today.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="history-card flip-in stagger-animation" data-delay="0.5">
                            <h3><i class="fas fa-award"></i> Modern Excellence</h3>
                            <p>Today, Sri Lanka continues to be a major player in the global gem market, combining traditional knowledge with modern mining and cutting techniques.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // Method to get history CSS
    static getCSS() {
        return `
        /* History Component Styles */
        .history-section {
            background: white;
            position: relative;
            overflow: hidden;
        }

        .history-card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin: 20px 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .history-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
        }

        .history-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .history-card h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.5rem;
        }

        .history-card p {
            color: #666;
            line-height: 1.8;
        }

        /* Mobile History Styles */
        @media (max-width: 575.98px) {
            .history-card {
                padding: 20px;
                margin: 15px 0;
            }
            
            .history-card h3 {
                font-size: 1.3rem;
            }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            .history-card {
                margin: 15px 0;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HistoryComponent;
} 