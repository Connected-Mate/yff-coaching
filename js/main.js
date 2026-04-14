/* ============================================
   YFF COACHING - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Loader ---
    const loader = document.getElementById('loader');

    function hideLoader() {
        if (loader && !loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
            triggerHeroAnimations();
        }
    }

    window.addEventListener('load', () => setTimeout(hideLoader, 600));
    // Fallback
    setTimeout(hideLoader, 2500);

    // --- Hero Animations ---
    function triggerHeroAnimations() {
        document.querySelectorAll('#hero .animate-in').forEach(el => {
            el.classList.add('visible');
        });
        animateCounters();
    }

    // --- Counter Animation ---
    function animateCounters() {
        document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };

            setTimeout(update, 1000);
        });
    }

    // --- Navbar Scroll ---
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
        // Navbar bg
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active nav link
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // --- Mobile Menu ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Contact Modal ---
    const modal = document.getElementById('contactModal');
    const modalClose = document.getElementById('modalClose');

    function openContact(e) {
        if (e) e.preventDefault();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeContact() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.open-contact').forEach(btn => {
        btn.addEventListener('click', openContact);
    });

    if (modalClose) modalClose.addEventListener('click', closeContact);

    // Close on overlay click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeContact();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeContact();
        }
    });

    // --- Scroll Animations (Intersection Observer) ---
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale').forEach(el => {
        scrollObserver.observe(el);
    });

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Floating particles in hero ---
    const particles = document.getElementById('particles');
    if (particles) {
        const frag = document.createDocumentFragment();
        for (let i = 0; i < 15; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 3 + 1;
            p.style.cssText = `
                position:absolute;
                width:${size}px;height:${size}px;
                background:rgba(230,48,25,${Math.random()*0.25+0.08});
                border-radius:50%;
                top:${Math.random()*100}%;left:${Math.random()*100}%;
                animation:floatP ${Math.random()*5+4}s ease-in-out infinite ${Math.random()*3}s;
            `;
            frag.appendChild(p);
        }
        particles.appendChild(frag);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatP {
                0%,100%{transform:translate(0,0);opacity:.2}
                33%{transform:translate(${Math.random()*30-15}px,${Math.random()*-40}px);opacity:.5}
                66%{transform:translate(${Math.random()*-20}px,${Math.random()*-50}px);opacity:.3}
            }
        `;
        document.head.appendChild(style);
    }

    // --- Parallax on hero image ---
    const heroImg = document.querySelector('.hero-img-wrapper');
    if (heroImg && window.matchMedia('(min-width: 769px)').matches) {
        window.addEventListener('scroll', () => {
            if (window.scrollY < window.innerHeight) {
                heroImg.style.transform = `translateY(${window.scrollY * 0.06}px)`;
            }
        }, { passive: true });
    }
});
