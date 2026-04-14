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
        "hero.subtitle": "Coach Sportif \u2022 France",
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
        "personal.location": "At your home, outdoors, or at the gym in France",

        // Group
        "group.tag": "Train Together",
        "group.title": 'Group <em class="text-accent">Training</em>',
        "group.lead": "Immerse yourself in an intense and motivating group training experience.",
        "group.p1": "With experience in Small Group Training at brands like Keep Cool, Metabolik and F45, plus Team Building work with companies such as Herm\u00e8s, I bring energy and structure to every session.",
        "group.cta": "Book a Group Session",
        "group.custom.title": "Custom Group",
        "group.custom.location": "At home / Outdoors / Gym",
        "group.custom.per": "/person/session",
        "group.custom.note": "Minimum 4 people",
        "group.hyrox.level": "All levels",
        "group.hyrox.per": "/person",
        "group.hyrox.location": "Prairie des Filtres",
        "group.hyrox.schedule": "Every Wednesday at 6:30 PM",
        "group.hyrox.note": "Max 12 people \u2014 Registration required",

        // Programs
        "programs.tag": "Online Coaching",
        "programs.title": 'Training <em class="text-accent">Programs</em>',
        "programs.desc": "Get a 100% personalized training program tailored to your goals \u2014 whether it's HYROX performance, weight loss, muscle building, or competition preparation.",
        "programs.hyrox.title": "HYROX Online Coaching",
        "programs.duration.1monthTrial": "1 Month (trial)",
        "programs.duration.1monthTrialOnly": "1 Month (trial only)",
        "programs.duration.1month": "1 Month",
        "programs.duration.3months": "3 Months",
        "programs.duration.6months": "6 Months",
        "programs.hyrox.f1": "Coaching application",
        "programs.hyrox.f2": "Fully personalized to your needs and availability",
        "programs.hyrox.f3": "Daily communication 6/7 days",
        "programs.hyrox.f4": "Complete assessment of previous race weaknesses and objectives",
        "programs.hyrox.f5": "Race data analysis to know where to focus",
        "programs.hyrox.f6": "Bi-weekly call for program recap and adaptation",
        "programs.hyrox.f7": "Race map analysis + precise race plan",
        "programs.hyrox.f8": "Access to YFF ACADEMY community group (worldwide HYROX athletes)",
        "programs.hyrox.f9": "Nutrition recommendations",
        "programs.hyrox.f10": "Monthly test to track progress",
        "programs.hyrox.f11": "Unlimited plan modifications (holidays / illness)",
        "programs.cta": "Get Started",
        "programs.online.title": "Online Programming",
        "programs.online.badge": "Fitness / Weight Loss / Muscle / Competition Prep",
        "programs.online.plan1.freq": "1 to 3 sessions/week",
        "programs.online.plan1.desc": "Chat 7/7 + Nutrition + Unlimited modifications",
        "programs.online.plan2.label": "Most Complete",
        "programs.online.plan2.freq": "4 to 7 sessions/week",
        "programs.online.plan2.desc": "Chat 7/7 + Nutrition advice + Unlimited modifications",
        "programs.choosePlan": "Choose This Plan",

        // About
        "about.tag": "Who Am I?",
        "about.lead": "A coach driven by passion for fitness and well-being.",
        "about.p1": "I've loved sports since I was young, and that passion led me to study and work in the field of physical performance and sports coaching.",
        "about.p2": "I studied Sports Science (STAPS) with a specialization in Sports Training and Performance Optimization, then pursued a Bachelor's degree in Fitness Professions. I've worked for nearly four years as a coach in gyms and at home.",
        "about.p3": "Now based in France, I'm here to help you reach your full potential.",
        "about.certs": "Certifications & Education",

        // CTA
        "cta.title": 'Ready to <em class="text-accent">Transform</em>?',
        "cta.desc": "Take the first step towards a healthier, stronger you. Let's build your fitness journey together.",
        "cta.contact": "Contact Me Now",

        // Footer
        "footer.tagline": "Coach Sportif en France<br>Fitness & Conditioning Coaching",
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
        "hero.subtitle": "Coach Sportif \u2022 France",
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
        "personal.location": "\u00C0 domicile, en ext\u00e9rieur ou en salle en France",

        // Group
        "group.tag": "En Groupe",
        "group.title": 'Cours <em class="text-accent">Collectifs</em>',
        "group.lead": "Plonge dans une exp\u00e9rience d'entra\u00eenement collectif intense et motivante.",
        "group.p1": "Fort de mon exp\u00e9rience en Small Group Training chez Keep Cool, Metabolik et F45, ainsi qu'en Team Building pour des entreprises comme Herm\u00e8s, j'apporte \u00e9nergie et structure \u00e0 chaque s\u00e9ance.",
        "group.cta": "R\u00e9server un Cours",
        "group.custom.title": "Sur Mesure",
        "group.custom.location": "\u00C0 domicile / En ext\u00e9rieur / En salle",
        "group.custom.per": "/personne/s\u00e9ance",
        "group.custom.note": "Minimum 4 personnes",
        "group.hyrox.level": "Tous niveaux",
        "group.hyrox.per": "/personne",
        "group.hyrox.location": "Prairie des Filtres",
        "group.hyrox.schedule": "Tous les mercredis \u00e0 18h30",
        "group.hyrox.note": "Maximum 12 personnes \u2014 Inscription au pr\u00e9alable",

        // Programs
        "programs.tag": "Coaching en Ligne",
        "programs.title": 'Programmes <em class="text-accent">d\'Entra\u00eenement</em>',
        "programs.desc": "Obtiens un programme 100% personnalis\u00e9 adapt\u00e9 \u00e0 tes objectifs \u2014 performance HYROX, perte de poids, prise de masse ou pr\u00e9paration concours.",
        "programs.hyrox.title": "HYROX Online Coaching",
        "programs.duration.1monthTrial": "1 Mois (test)",
        "programs.duration.1monthTrialOnly": "1 Mois (test uniquement)",
        "programs.duration.1month": "1 Mois",
        "programs.duration.3months": "3 Mois",
        "programs.duration.6months": "6 Mois",
        "programs.hyrox.f1": "Application de coaching",
        "programs.hyrox.f2": "Enti\u00e8rement personnalis\u00e9 selon tes besoins et tes disponibilit\u00e9s",
        "programs.hyrox.f3": "Communication quotidienne 6j/7",
        "programs.hyrox.f4": "\u00C9valuation compl\u00e8te des faiblesses de course pr\u00e9c\u00e9dentes et des objectifs",
        "programs.hyrox.f5": "Analyse des donn\u00e9es de course pour savoir o\u00f9 se concentrer",
        "programs.hyrox.f6": "Appel bi-mensuel pour recap du programme et adaptation",
        "programs.hyrox.f7": "Analyse de la map de course + plan de course pr\u00e9cis",
        "programs.hyrox.f8": "Acc\u00e8s au groupe communautaire YFF ACADEMY (athl\u00e8tes HYROX du monde entier)",
        "programs.hyrox.f9": "Recommandations en mati\u00e8re de nutrition",
        "programs.hyrox.f10": "Test mensuel pour suivre les progr\u00e8s",
        "programs.hyrox.f11": "Modifications illimit\u00e9es du plan (vacances / maladie)",
        "programs.cta": "C'est Parti !",
        "programs.online.title": "Programme en Ligne",
        "programs.online.badge": "Remise en forme / Perte de poids / Masse musculaire / Pr\u00e9pa concours",
        "programs.online.plan1.freq": "1 \u00e0 3 s\u00e9ances/semaine",
        "programs.online.plan1.desc": "Chat 7/7J + Nutrition + Modifications illimit\u00e9es",
        "programs.online.plan2.label": "Le Plus Complet",
        "programs.online.plan2.freq": "4 \u00e0 7 s\u00e9ances/semaine",
        "programs.online.plan2.desc": "Chat 7/7J + Conseils nutrition + Modifications illimit\u00e9es",
        "programs.choosePlan": "Choisir ce Plan",

        // About
        "about.tag": "Qui suis-je ?",
        "about.lead": "Un coach port\u00e9 par la passion du fitness et du bien-\u00eatre.",
        "about.p1": "Passionn\u00e9 de sport depuis toujours, cette passion m'a amen\u00e9 \u00e0 \u00e9tudier et travailler dans le domaine de la performance physique et du coaching sportif.",
        "about.p2": "J'ai \u00e9tudi\u00e9 les Sciences du Sport (STAPS) avec une sp\u00e9cialisation en Entra\u00eenement Sportif et Optimisation de la Performance, puis j'ai poursuivi avec une Licence Professionnelle M\u00e9tiers de la Forme. J'ai travaill\u00e9 pr\u00e8s de quatre ans comme coach en salle et \u00e0 domicile.",
        "about.p3": "D\u00e9sormais install\u00e9 en France, je suis l\u00e0 pour t'aider \u00e0 atteindre ton plein potentiel.",
        "about.certs": "Certifications & Formation",

        // CTA
        "cta.title": 'Pr\u00eat \u00e0 te <em class="text-accent">Transformer</em> ?',
        "cta.desc": "Fais le premier pas vers un toi plus sain et plus fort. Construisons ensemble ton parcours fitness.",
        "cta.contact": "Me Contacter",

        // Footer
        "footer.tagline": "Coach Sportif en France<br>Coaching Fitness & Pr\u00e9paration Physique",
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
            ? "Coach sportif certifi\u00e9 en France. Coaching Fitness & Pr\u00e9paration physique \u2014 Coaching Personnel, Cours Collectifs, Programmes Sur-Mesure. Transforme ton corps avec Yohan Plier."
            : "Certified Personal Trainer in France. Fitness & Conditioning coaching \u2014 Personal Training, Group Training, Custom Programs. Transform your body with Yohan Plier.";
    }

    // Update title
    document.title = lang === 'fr'
        ? "YFF Coaching | Yohan Plier - Coach Sportif France"
        : "YFF Coaching | Yohan Plier - Coach Sportif France";

    // Update lang switch button
    const flag = document.getElementById('langFlag');
    if (flag) flag.textContent = lang === 'fr' ? 'FR' : 'EN';

    // Update modal texts
    const modalTranslations = {
        en: { title: "Get In Touch", sub: "Choose how you'd like to reach me", wa: "Send me a message" },
        fr: { title: "Me Contacter", sub: "Choisis comment tu veux me joindre", wa: "Envoie-moi un message" }
    };
    const mt = modalTranslations[lang] || modalTranslations.en;
    document.querySelectorAll('[data-i18n-modal]').forEach(el => {
        const key = el.getAttribute('data-i18n-modal');
        if (mt[key]) el.textContent = mt[key];
    });

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
