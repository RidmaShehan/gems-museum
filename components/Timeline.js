/**
 * TIMELINE COMPONENT
 * ========================================
 */

class TimelineComponent {
    constructor() {
        this.init();
    }

    init() {
        this.setupTimelineAnimation();
        this.setupTimelineInteractions();
    }

    setupTimelineAnimation() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
        });
    }

    setupTimelineInteractions() {
        // Add hover effects for timeline items
        document.querySelectorAll('.timeline-content').forEach(content => {
            content.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            content.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Method to get timeline HTML
    static getHTML() {
        return `
        <section id="timeline" class="section" style="background: #f8f9fa;">
            <div class="container">
                <h2 class="section-title bounce-in">Timeline of Sri Lankan Gems</h2>
                <div class="timeline">
                    <div class="timeline-item left">
                        <div class="timeline-content slide-in-left stagger-animation" data-delay="0.1">
                            <span class="timeline-date">2000 BCE</span>
                            <h4>Ancient Beginnings</h4>
                            <p>First recorded gem mining activities in Sri Lanka by ancient civilizations.</p>
                        </div>
                    </div>
                    <div class="timeline-item right">
                        <div class="timeline-content slide-in-right stagger-animation" data-delay="0.2">
                            <span class="timeline-date">300 BCE</span>
                            <h4>Trade Routes Established</h4>
                            <p>Sri Lankan gems begin appearing in Roman and Greek jewelry, establishing international trade.</p>
                        </div>
                    </div>
                    <div class="timeline-item left">
                        <div class="timeline-content slide-in-left stagger-animation" data-delay="0.3">
                            <span class="timeline-date">1505 CE</span>
                            <h4>Colonial Period</h4>
                            <p>Portuguese colonization brings new mining techniques and expanded trade networks.</p>
                        </div>
                    </div>
                    <div class="timeline-item right">
                        <div class="timeline-content slide-in-right stagger-animation" data-delay="0.4">
                            <span class="timeline-date">1815 CE</span>
                            <h4>British Crown Jewels</h4>
                            <p>Sri Lankan gems become part of the British Crown Jewels collection.</p>
                        </div>
                    </div>
                    <div class="timeline-item left">
                        <div class="timeline-content slide-in-left stagger-animation" data-delay="0.5">
                            <span class="timeline-date">1948 CE</span>
                            <h4>Independence Era</h4>
                            <p>Sri Lanka gains independence and develops its own gem industry standards.</p>
                        </div>
                    </div>
                    <div class="timeline-item right">
                        <div class="timeline-content slide-in-right stagger-animation" data-delay="0.6">
                            <span class="timeline-date">Present</span>
                            <h4>Modern Excellence</h4>
                            <p>Today, Sri Lanka remains a global leader in gem mining and cutting technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    // Method to get timeline CSS
    static getCSS() {
        return `
        /* Timeline Component Styles */
        .timeline {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
        }

        .timeline::after {
            content: '';
            position: absolute;
            width: 6px;
            background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
        }

        .timeline-item {
            padding: 10px 40px;
            position: relative;
            background-color: inherit;
            width: 50%;
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            right: -17px;
            background: var(--gold-color);
            border: 4px solid white;
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }

        .timeline-item.left {
            left: 0;
        }

        .timeline-item.right {
            left: 50%;
        }

        .timeline-item.right::after {
            left: -16px;
        }

        .timeline-content {
            padding: 20px 30px;
            background: white;
            position: relative;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .timeline-content h4 {
            color: var(--primary-color);
            margin-bottom: 10px;
        }

        .timeline-date {
            color: var(--gold-color);
            font-weight: bold;
            font-size: 0.9rem;
        }

        /* Mobile Timeline Styles */
        @media (max-width: 575.98px) {
            .timeline::after {
                left: 20px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 50px;
                padding-right: 15px;
            }
            
            .timeline-item.right {
                left: 0%;
            }
            
            .timeline-item::after {
                left: 10px;
                width: 20px;
                height: 20px;
            }
            
            .timeline-content {
                padding: 15px 20px;
            }
            
            .timeline-content h4 {
                font-size: 1.1rem;
            }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
            .timeline::after {
                left: 31px;
            }
            
            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }
            
            .timeline-item.right {
                left: 0%;
            }
            
            .timeline-item::after {
                left: 15px;
            }
            
            .timeline-item.right::after {
                left: 15px;
            }
        }
        `;
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimelineComponent;
} 