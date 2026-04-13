/* ============================================
   YFF COACHING - Internationalization (i18n)
   Auto-detects browser language, toggles FR/EN
   ============================================ */

const translations = {
    en: {
        // Nav
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.personal": "Personal Training",
        "nav.group": "Group Training",
        "nav.programs": "Programs",
        "nav.about": "About",
        "nav.contact": "Contact Me",

        // Hero
        "hero.subtitle": "Personal Trainer \u2022 Calgary",
        "hero.line1": "TRANSFORM",
        "hero.line2": 'YOUR <em class="text-accent">BODY</em>',
        "hero.line3": "YOUR LIFE",
        "hero.desc": "Fitness & Conditioning coaching with Yohan Plier. Personal training, outdoor, at home and indoor sessions tailored to your goals.",
        "hero.cta1": "Start Today",
        "hero.cta2": "Explore Services",
        "hero.stat1": "Years Experience",
        "hero.stat2": "Clients Trained",
        "hero.stat3": "Certifications",

        // Services
        "services.tag": "What I Offer",
        "services.title": 'My <em class="text-accent">Services</em>',
        "services.desc": "Whether you want to lose weight, build muscle, or improve your overall fitness, I provide the expertise and motivation you need.",
        "services.card1.title": "Personal Training",
        "services.card1.desc": "One-on-one sessions tailored to your specific goals. At home, outdoors, or at the gym.",
        "services.card2.title": "Group Training",
        "services.card2.desc": "Boot camps, team building, and HYROX classes. Train together, push harder.",
        "services.card3.title": "Training Programs",
        "services.card3.desc": "100% personalized programs with nutrition guidance and weekly monitoring.",

        // Personal Training
        "personal.tag": "One-on-One",
        "personal.title": 'Personal <em class="text-accent">Training</em>',
        "personal.lead": "Want to start fitness?",
        "personal.p1": "Personal Training offers you the opportunity to master various exercises and training techniques under the close supervision of your coach, regardless of your fitness goals.",
        "personal.p2": "<strong>Stop wasting time</strong> \u2014 for optimal results, you require personalized training tailored to your specific needs.",
        "personal.f1.title": "Expert Guidance",
        "personal.f1.desc": "Professional supervision at every step",
        "personal.f2.title": "Custom Workouts",
        "personal.f2.desc": "Programs adapted to your body and goals",
        "personal.f3.title": "Real Results",
        "personal.f3.desc": "Track your progress with measurable outcomes",
        "personal.location": "At your home, outdoors, or at the gym in Calgary",

        // Pricing
        "pricing.tag": "Investment",
        "pricing.title": 'Simple <em class="text-accent">Pricing</em>',
        "pricing.weekly.title": "Weekly",
        "pricing.weekly.sub": "Pay as you go",
        "pricing.1session": "1 session/week",
        "pricing.2sessions": "2 sessions/week",
        "pricing.save5": "Save $5",
        "pricing.bestvalue": "Best Value",
        "pricing.packages.title": "Packages",
        "pricing.packages.sub": "Commit & save",
        "pricing.5sessions": "5 sessions",
        "pricing.10sessions": "10 sessions",
        "pricing.bestdeal": "Best Deal",
        "pricing.cta": "Get Started",

        // Group
        "group.tag": "Train Together",
        "group.title": 'Group <em class="text-accent">Training</em>',
        "group.lead": "Immerse yourself in an intense and motivating group training experience in Calgary.",
        "group.p1": "With experience in Small Group Training at brands like Keep Cool, Metabolik and F45, plus Team Building work with companies such as Herm\u00e8s, I bring energy and structure to every session.",
        "group.cta": "Book a Group Session",

        // Programs
        "programs.tag": "Custom Plans",
        "programs.title": 'Training <em class="text-accent">Programs</em>',
        "programs.desc": "You don't know what to do to achieve your goals? Get a 100% personalized training program for weight loss, fitness, or muscle development.",
        "programs.plan1.title": "Essential Plan",
        "programs.plan1.freq": "1-3 sessions / week",
        "programs.plan2.label": "Most Complete",
        "programs.plan2.title": "Intensive Plan",
        "programs.plan2.freq": "4-6 sessions / week",
        "programs.f1": "100% personalized program",
        "programs.f2": "6-day weekly monitoring",
        "programs.f3": "Nutrition guidance",
        "programs.f4": "Unlimited program adjustments",
        "programs.f5": "Weekly recaps",
        "programs.f6": "Full nutrition plan",
        "programs.f7": "Weekly recaps & check-ins",
        "programs.getPlan": "Get This Plan",

        // About
        "about.tag": "Who Am I?",
        "about.lead": "A coach driven by passion for fitness and well-being.",
        "about.p1": "I've loved sports since I was young, and that passion led me to study and work in the field of physical performance and sports coaching.",
        "about.p2": "I studied Sports Science (STAPS) with a specialization in Sports Training and Performance Optimization, then pursued a Bachelor's degree in Fitness Professions. I've worked for nearly four years as a coach in gyms and at home.",
        "about.p3": "Now based in Calgary, I'm here to help you reach your full potential.",
        "about.certs": "Certifications & Education",

        // CTA
        "cta.title": 'Ready to <em class="text-accent">Transform</em>?',
        "cta.desc": "Take the first step towards a healthier, stronger you. Let's build your fitness journey together.",
        "cta.contact": "Contact Me Now",

        // Footer
        "footer.tagline": "Personal Trainer in Calgary<br>Fitness & Conditioning Coaching",
        "footer.quicklinks": "Quick Links",
        "footer.getintouch": "Get In Touch"
    },

    fr: {
        // Nav
        "nav.home": "Accueil",
        "nav.services": "Services",
        "nav.personal": "Coaching Perso",
        "nav.group": "Cours Collectifs",
        "nav.programs": "Programmes",
        "nav.about": "\u00C0 propos",
        "nav.contact": "Me Contacter",

        // Hero
        "hero.subtitle": "Coach Sportif \u2022 Calgary",
        "hero.line1": "TRANSFORME",
        "hero.line2": 'TON <em class="text-accent">CORPS</em>',
        "hero.line3": "TA VIE",
        "hero.desc": "Coaching Fitness & Pr\u00e9paration physique avec Yohan Plier. Entra\u00eenement personnel, en ext\u00e9rieur, \u00e0 domicile ou en salle, adapt\u00e9 \u00e0 tes objectifs.",
        "hero.cta1": "Commence Aujourd'hui",
        "hero.cta2": "D\u00e9couvrir les Services",
        "hero.stat1": "Ans d'Exp\u00e9rience",
        "hero.stat2": "Clients Entra\u00een\u00e9s",
        "hero.stat3": "Certifications",

        // Services
        "services.tag": "Mes Prestations",
        "services.title": 'Mes <em class="text-accent">Services</em>',
        "services.desc": "Que tu veuilles perdre du poids, prendre du muscle ou am\u00e9liorer ta condition physique, je t'apporte l'expertise et la motivation dont tu as besoin.",
        "services.card1.title": "Coaching Personnel",
        "services.card1.desc": "S\u00e9ances individuelles adapt\u00e9es \u00e0 tes objectifs. \u00C0 domicile, en ext\u00e9rieur ou en salle.",
        "services.card2.title": "Cours Collectifs",
        "services.card2.desc": "Boot camps, team building et cours HYROX. Entra\u00eene-toi en groupe, repousse tes limites.",
        "services.card3.title": "Programmes",
        "services.card3.desc": "Programmes 100% personnalis\u00e9s avec suivi nutritionnel et bilan hebdomadaire.",

        // Personal Training
        "personal.tag": "Individuel",
        "personal.title": 'Coaching <em class="text-accent">Personnel</em>',
        "personal.lead": "Tu veux te mettre au sport ?",
        "personal.p1": "Le Coaching Personnel t'offre l'opportunit\u00e9 de ma\u00eetriser diff\u00e9rents exercices et techniques d'entra\u00eenement sous la supervision de ton coach, quels que soient tes objectifs.",
        "personal.p2": "<strong>Arr\u00eate de perdre du temps</strong> \u2014 pour des r\u00e9sultats optimaux, tu as besoin d'un entra\u00eenement personnalis\u00e9 adapt\u00e9 \u00e0 tes besoins sp\u00e9cifiques.",
        "personal.f1.title": "Expertise Pro",
        "personal.f1.desc": "Supervision professionnelle \u00e0 chaque \u00e9tape",
        "personal.f2.title": "Entra\u00eenements Sur-Mesure",
        "personal.f2.desc": "Programmes adapt\u00e9s \u00e0 ton corps et tes objectifs",
        "personal.f3.title": "R\u00e9sultats Concrets",
        "personal.f3.desc": "Suis ta progression avec des r\u00e9sultats mesurables",
        "personal.location": "\u00C0 domicile, en ext\u00e9rieur ou en salle \u00e0 Calgary",

        // Pricing
        "pricing.tag": "Tarifs",
        "pricing.title": 'Tarifs <em class="text-accent">Simples</em>',
        "pricing.weekly.title": "Hebdomadaire",
        "pricing.weekly.sub": "Sans engagement",
        "pricing.1session": "1 s\u00e9ance/semaine",
        "pricing.2sessions": "2 s\u00e9ances/semaine",
        "pricing.save5": "\u00C9conomise 5$",
        "pricing.bestvalue": "Meilleur Rapport",
        "pricing.packages.title": "Forfaits",
        "pricing.packages.sub": "Engage-toi & \u00e9conomise",
        "pricing.5sessions": "5 s\u00e9ances",
        "pricing.10sessions": "10 s\u00e9ances",
        "pricing.bestdeal": "Meilleure Offre",
        "pricing.cta": "C'est Parti !",

        // Group
        "group.tag": "En Groupe",
        "group.title": 'Cours <em class="text-accent">Collectifs</em>',
        "group.lead": "Plonge dans une exp\u00e9rience d'entra\u00eenement collectif intense et motivante \u00e0 Calgary.",
        "group.p1": "Fort de mon exp\u00e9rience en Small Group Training chez Keep Cool, Metabolik et F45, ainsi qu'en Team Building pour des entreprises comme Herm\u00e8s, j'apporte \u00e9nergie et structure \u00e0 chaque s\u00e9ance.",
        "group.cta": "R\u00e9server un Cours",

        // Programs
        "programs.tag": "Plans Personnalis\u00e9s",
        "programs.title": 'Programmes <em class="text-accent">d\'Entra\u00eenement</em>',
        "programs.desc": "Tu ne sais pas quoi faire pour atteindre tes objectifs ? Obtiens un programme 100% personnalis\u00e9 pour la perte de poids, le fitness ou le d\u00e9veloppement musculaire.",
        "programs.plan1.title": "Plan Essentiel",
        "programs.plan1.freq": "1-3 s\u00e9ances / semaine",
        "programs.plan2.label": "Le Plus Complet",
        "programs.plan2.title": "Plan Intensif",
        "programs.plan2.freq": "4-6 s\u00e9ances / semaine",
        "programs.f1": "Programme 100% personnalis\u00e9",
        "programs.f2": "Suivi 6 jours par semaine",
        "programs.f3": "Conseils nutritionnels",
        "programs.f4": "Ajustements illimit\u00e9s du programme",
        "programs.f5": "Bilans hebdomadaires",
        "programs.f6": "Plan nutrition complet",
        "programs.f7": "Bilans & points hebdomadaires",
        "programs.getPlan": "Choisir ce Plan",

        // About
        "about.tag": "Qui suis-je ?",
        "about.lead": "Un coach port\u00e9 par la passion du fitness et du bien-\u00eatre.",
        "about.p1": "Passionn\u00e9 de sport depuis toujours, cette passion m'a amen\u00e9 \u00e0 \u00e9tudier et travailler dans le domaine de la performance physique et du coaching sportif.",
        "about.p2": "J'ai \u00e9tudi\u00e9 les Sciences du Sport (STAPS) avec une sp\u00e9cialisation en Entra\u00eenement Sportif et Optimisation de la Performance, puis j'ai poursuivi avec une Licence Professionnelle M\u00e9tiers de la Forme. J'ai travaill\u00e9 pr\u00e8s de quatre ans comme coach en salle et \u00e0 domicile.",
        "about.p3": "D\u00e9sormais install\u00e9 \u00e0 Calgary, je suis l\u00e0 pour t'aider \u00e0 atteindre ton plein potentiel.",
        "about.certs": "Certifications & Formation",

        // CTA
        "cta.title": 'Pr\u00eat \u00e0 te <em class="text-accent">Transformer</em> ?',
        "cta.desc": "Fais le premier pas vers un toi plus sain et plus fort. Construisons ensemble ton parcours fitness.",
        "cta.contact": "Me Contacter",

        // Footer
        "footer.tagline": "Coach Sportif \u00e0 Calgary<br>Coaching Fitness & Pr\u00e9paration Physique",
        "footer.quicklinks": "Liens Rapides",
        "footer.getintouch": "Me Contacter"
    }
};

// --- i18n Engine ---
let currentLang = 'en';

function detectLanguage() {
    // 1. Check localStorage preference
    const saved = localStorage.getItem('yff-lang');
    if (saved && translations[saved]) return saved;

    // 2. Check browser language
    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browserLang.startsWith('fr')) return 'fr';

    return 'en';
}

function applyTranslations(lang) {
    currentLang = lang;
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = lang === 'fr'
            ? "Coach sportif certifi\u00e9 \u00e0 Calgary. Coaching Fitness & Pr\u00e9paration physique \u2014 Coaching Personnel, Cours Collectifs, Programmes Sur-Mesure. Transforme ton corps avec Yohan Plier."
            : "Certified Personal Trainer in Calgary. Fitness & Conditioning coaching \u2014 Personal Training, Group Training, Custom Programs. Transform your body with Yohan Plier.";
    }

    // Update title
    document.title = lang === 'fr'
        ? "YFF Coaching | Yohan Plier - Coach Sportif Calgary"
        : "YFF Coaching | Yohan Plier - Personal Trainer Calgary";

    // Update lang switch button
    const flag = document.getElementById('langFlag');
    if (flag) flag.textContent = lang === 'fr' ? 'FR' : 'EN';

    localStorage.setItem('yff-lang', lang);
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    applyTranslations(newLang);
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const detectedLang = detectLanguage();
    applyTranslations(detectedLang);

    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});
