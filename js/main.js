/**
 * SRI LANKAN GEM MUSEUM - MAIN JAVASCRIPT
 * Component-based JavaScript Architecture
 * ========================================
 */

// ========================================
// MAIN APPLICATION CLASS
// ========================================

class GemMuseumApp {
    constructor() {
        this.components = {};
        this.componentLoader = null;
        this.init();
    }

    async init() {
        // Initialize component loader
        this.componentLoader = new ComponentLoader();
        
        // Wait for components to load
        await this.waitForComponents();
        
        // Replace placeholders with actual component HTML
        this.componentLoader.replacePlaceholders();
        
        // Initialize all JavaScript components
        this.initializeComponents();
        
        // Initialize hero slider after DOM and components are ready
        this.initHeroSlider();
        
        console.log('Sri Lankan Gem Museum website loaded successfully!');
        console.log('Component-based architecture initialized with:', Object.keys(this.components).length, 'components');
    }

    async waitForComponents() {
        // Wait for all components to be loaded
        return new Promise((resolve) => {
            const checkComponents = () => {
                const componentNames = [
                    'Navigation', 'Hero', 'History', 'Gallery', 
                    'Timeline', 'Features', 'Contact', 'Footer'
                ];
                
                const allLoaded = componentNames.every(name => 
                    this.componentLoader.getComponent(name)
                );
                
                if (allLoaded) {
                    resolve();
                } else {
                    setTimeout(checkComponents, 100);
                }
            };
            
            checkComponents();
        });
    }

    initializeComponents() {
        // Initialize all JavaScript components after HTML is loaded
        this.components.navigation = new NavigationComponent();
        this.components.hero = new HeroComponent();
        this.components.history = new HistoryComponent();
        this.components.gallery = new GalleryComponent();
        this.components.timeline = new TimelineComponent();
        this.components.features = new FeaturesComponent();
        this.components.contact = new ContactComponent();
        this.components.footer = new FooterComponent();
        this.components.animations = new AnimationsComponent();
        this.components.mobile = new MobileComponent();
    }

    initHeroSlider() {
        const images = document.querySelectorAll('.hero-slider .hero-img');
        const leftArrow = document.querySelector('.hero-arrow-left');
        const rightArrow = document.querySelector('.hero-arrow-right');
        let current = 0;
        let interval;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? 0.7 : 0;
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            current = (current + 1) % images.length;
            showImage(current);
        }

        function prevImage() {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        }

        function startSlider() {
            interval = setInterval(nextImage, 4000);
        }

        function resetSlider() {
            clearInterval(interval);
            startSlider();
        }

        if (leftArrow && rightArrow) {
            leftArrow.addEventListener('click', function() {
                prevImage();
                resetSlider();
            });
            rightArrow.addEventListener('click', function() {
                nextImage();
                resetSlider();
            });
        }

        showImage(current);
        startSlider();
    }
}

// ========================================
// INITIALIZE APPLICATION
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    new GemMuseumApp();
}); 