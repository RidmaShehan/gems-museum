/**
 * COMPONENT LOADER UTILITY
 * ========================================
 * Handles dynamic loading of HTML components
 */

class ComponentLoader {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {
        this.loadAllComponents();
    }

    async loadAllComponents() {
        const componentNames = [
            'Navigation',
            'Hero', 
            'History',
            'Gallery',
            'Timeline',
            'Features',
            'Contact',
            'Footer'
        ];

        for (const name of componentNames) {
            await this.loadComponent(name);
        }
    }

    async loadComponent(componentName) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (response.ok) {
                const html = await response.text();
                this.components[componentName] = html;
                console.log(`Loaded component: ${componentName}`);
            } else {
                console.warn(`Failed to load component: ${componentName}`);
            }
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }

    getComponent(componentName) {
        return this.components[componentName] || '';
    }

    insertComponent(componentName, targetElement) {
        const html = this.getComponent(componentName);
        if (html && targetElement) {
            targetElement.innerHTML = html;
        }
    }

    // Method to replace placeholders in main HTML
    replacePlaceholders() {
        const placeholders = document.querySelectorAll('[data-component]');
        placeholders.forEach(placeholder => {
            const componentName = placeholder.getAttribute('data-component');
            const html = this.getComponent(componentName);
            if (html) {
                placeholder.innerHTML = html;
            }
        });
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLoader;
} 