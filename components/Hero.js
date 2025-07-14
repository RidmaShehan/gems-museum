/**
 * HERO COMPONENT
 * ========================================
 */

class HeroComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupFloatingGems();
        this.setupParallaxEffect();
    }

    setupFloatingGems() {
        // Setup floating gems animation variations with different timing
        document.querySelectorAll('.floating-gem').forEach((gem, index) => {
            // Vary animation duration and delay for more natural movement
            const duration = 4 + (index % 3) * 2; // 4s, 6s, 8s cycles
            const delay = index * 0.5; // Staggered start times
            
            gem.style.animationDuration = `${duration}s`;
            gem.style.animationDelay = `${delay}s`;
            
            // Add subtle rotation for more dynamic movement
            gem.style.transform = `rotate(${index * 15}deg)`;
        });

        // Enhanced dynamic color changing for gems with more variety
        const gemColors = [
            '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b',
            '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e', '#e17055', '#00b894'
        ];
        let colorIndex = 0;

        setInterval(() => {
            document.querySelectorAll('.floating-gem i').forEach((gem, index) => {
                const color = gemColors[(colorIndex + index) % gemColors.length];
                gem.style.color = color;
                gem.style.textShadow = `0 0 10px ${color}`;
            });
            colorIndex++;
        }, 2000); // Faster color changes for more dynamic effect
    }

    setupParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Method to get hero HTML
    static getHTML() {
        return `
        <section id="home" class="hero">
            <div class="floating-gem"><i class="fas fa-gem" style="font-size: 2rem; color: rgba(255,255,255,0.3);"></i></div>
            <div class="floating-gem"><i class="fas fa-gem" style="font-size: 1.5rem; color: rgba(255,255,255,0.2);"></i></div>
            <div class="floating-gem"><i class="fas fa-gem" style="font-size: 2.5rem; color: rgba(255,255,255,0.25);"></i></div>
            
            <div class="hero-content">
                <h1>Discover the Treasures of Sri Lanka</h1>
                <p>Explore the world's most exquisite gemstones and their fascinating history</p>
                <a href="#history" class="btn btn-primary">Begin Your Journey</a>
            </div>
        </section>
        `;
    }

    // Method to get hero CSS
    static getCSS() {
        return `
        /* Hero Component Styles */
        .hero {
            height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="gem1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff6b6b;stop-opacity:1" /><stop offset="100%" style="stop-color:%23feca57;stop-opacity:1" /></linearGradient><linearGradient id="gem2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2348dbfb;stop-opacity:1" /><stop offset="100%" style="stop-color:%23c56cf0;stop-opacity:1" /></linearGradient></defs><polygon points="200,100 300,50 400,100 350,200 250,200" fill="url(%23gem1)" opacity="0.3"/><polygon points="800,200 900,150 1000,200 950,300 850,300" fill="url(%23gem2)" opacity="0.3"/><polygon points="100,400 200,350 300,400 250,500 150,500" fill="url(%23gem1)" opacity="0.2"/><polygon points="900,500 1000,450 1100,500 1050,600 950,600" fill="url(%23gem2)" opacity="0.2"/></svg>');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
            animation: fadeInUp 1s ease-out;
        }

        .hero-content p {
            font-size: 1.3rem;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .hero-content .btn {
            animation: fadeInUp 1s ease-out 0.6s both;
            padding: 15px 40px;
            font-size: 1.2rem;
            border-radius: 50px;
            background: linear-gradient(45deg, var(--gold-color), #e67e22);
            border: none;
            color: white;
            transition: all 0.3s ease;
        }

        .hero-content .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        /* Floating Gems Animation */
        .floating-gem {
            position: absolute;
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        .floating-gem:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .floating-gem:nth-child(2) { top: 60%; right: 15%; animation-delay: 2s; }
        .floating-gem:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 4s; }

        /* Mobile Hero Styles */
        @media (max-width: 575.98px) {
            .hero {
                height: 100vh;
                padding: 0 15px;
            }
            
            .hero-content h1 {
                font-size: 2rem;
                line-height: 1.2;
                margin-bottom: 15px;
            }
            
            .hero-content p {
                font-size: 1rem;
                margin-bottom: 25px;
            }
            
            .hero-content .btn {
                padding: 12px 30px;
                font-size: 1rem;
            }
            
            .floating-gem {
                display: none;
            }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            .hero-content h1 {
                font-size: 3rem;
            }
        }

        @media (min-width: 992px) and (max-width: 1199.98px) {
            .hero-content h1 {
                font-size: 3.5rem;
            }
        }

        @media (min-width: 1200px) {
            .hero-content h1 {
                font-size: 4rem;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeroComponent;
} 