/**
 * GALLERY COMPONENT
 * ========================================
 */

class GalleryComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupHoverEffects();
        this.setupTooltips();
        this.setupCardAnimations();
    }

    setupHoverEffects() {
        document.querySelectorAll('.gem-card').forEach(card => {
            // Check if device supports hover
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
            if (!isTouchDevice) {
                // Desktop hover effects
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.05) rotateY(5deg)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                });
            } else {
                // Mobile touch effects
                card.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.98)';
                });
                
                card.addEventListener('touchend', function() {
                    this.style.transform = 'scale(1)';
                });
            }
        });
    }

    setupTooltips() {
        document.querySelectorAll('.gem-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'gem-tooltip';
                tooltip.textContent = 'Click to learn more';
                tooltip.style.cssText = `
                    position: absolute;
                    background: rgba(0,0,0,0.8);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 12px;
                    top: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;
                this.style.position = 'relative';
                this.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.style.opacity = '1';
                }, 100);
            });
            
            card.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.gem-tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    }

    setupCardAnimations() {
        // Add staggered animation delays
        document.querySelectorAll('.gem-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Method to get gallery HTML
    static getHTML() {
        return `
        <section id="gallery" class="section gem-gallery">
            <div class="container">
                <h2 class="section-title zoom-in" style="color: white;">Our Precious Gem Collection</h2>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="gem-card bounce-in stagger-animation" data-delay="0.1">
                            <div class="gem-icon">💎</div>
                            <h4>Blue Sapphire</h4>
                            <p>The royal blue sapphire, Sri Lanka's most prized gemstone, symbolizes wisdom and nobility.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="gem-card scale-in stagger-animation" data-delay="0.2">
                            <div class="gem-icon">🔴</div>
                            <h4>Ruby</h4>
                            <p>The "King of Gemstones," our rubies are known for their exceptional clarity and vibrant color.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="gem-card slide-in-left stagger-animation" data-delay="0.3">
                            <div class="gem-icon">🟡</div>
                            <h4>Yellow Sapphire</h4>
                            <p>Bright and lustrous, yellow sapphires bring good fortune and prosperity to their owners.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="gem-card slide-in-right stagger-animation" data-delay="0.4">
                            <div class="gem-icon">🟢</div>
                            <h4>Emerald</h4>
                            <p>Our emeralds showcase the lush green beauty of Sri Lanka's tropical landscape.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4">
                        <div class="gem-card rotate-in stagger-animation" data-delay="0.5">
                            <div class="gem-icon">⭐</div>
                            <h4>Star Sapphire</h4>
                            <p>The mystical star sapphire displays a unique six-ray star pattern when cut properly.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="gem-card flip-in stagger-animation" data-delay="0.6">
                            <div class="gem-icon">🔸</div>
                            <h4>Padparadscha</h4>
                            <p>The rare pinkish-orange sapphire, named after the lotus flower, is uniquely Sri Lankan.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="gem-card zoom-in stagger-animation" data-delay="0.7">
                            <div class="gem-icon">🔮</div>
                            <h4>Moonstone</h4>
                            <p>Sri Lanka's national gemstone, moonstone displays a mysterious blue sheen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // Method to get gallery CSS
    static getCSS() {
        return `
        /* Gallery Component Styles */
        .gem-gallery {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .gem-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 20px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            text-align: center;
        }

        .gem-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .gem-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            background: linear-gradient(45deg, var(--gold-color), #e67e22);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .gem-card h4 {
            margin-bottom: 15px;
            font-size: 1.3rem;
        }

        .gem-card p {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        /* Mobile Gallery Styles */
        @media (max-width: 575.98px) {
            .gem-card {
                padding: 15px;
                margin: 15px 0;
            }
            
            .gem-icon {
                font-size: 3rem;
                margin-bottom: 15px;
            }
            
            .gem-card h4 {
                font-size: 1.1rem;
            }
            
            .gem-card p {
                font-size: 0.85rem;
            }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            .gem-card {
                margin: 15px 0;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GalleryComponent;
} 